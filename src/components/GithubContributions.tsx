import { useEffect, useState } from "react";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type GitHubResponse = {
  total: {
    [year: string]: number;
  };
  contributions: Contribution[];
};

const GITHUB_USERNAME = "reinzjustinedagang";

const CONTRIBUTION_COLOR = "#2BC0AC";

function getContributionOpacity(level: number) {
  const opacity = [0.08, 0.25, 0.45, 0.7, 1];

  return opacity[level] ?? opacity[0];
}

export function GithubContributions() {
  const [data, setData] = useState<GitHubResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub contributions");
        }

        const result: GitHubResponse = await response.json();

        setData(result);
      } catch (error) {
        console.error("GitHub contribution error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="h-64 animate-pulse rounded-2xl bg-muted/10" />
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const totalContributions = data.total.lastYear ?? 0;

  return (
    <section id="github" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10 max-w-2xl">
          <p className="font-display text-sm font-medium text-primary">
            GitHub
          </p>

          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Coding consistently
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            A look at my development activity and contributions over the past
            year.
          </p>
        </div>

        {/* GitHub Content */}
        <div className="p-0">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B0F12] text-primary">
                <GithubIcon size={24} />
              </div>

              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  {totalContributions.toLocaleString()} contributions
                </p>

                <p className="text-sm text-muted-foreground">
                  in the last year
                </p>
              </div>
            </div>

            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              View GitHub
              <ExternalLinkIcon size={15} />
            </a>
          </div>

          {/* Calendar */}
          <div className="overflow-x-auto pb-3">
            <div className="min-w-[760px]">
              {/* Month labels */}
              <div className="mb-2 ml-8 flex justify-between text-xs text-muted-foreground">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
                <span>Nov</span>
                <span>Dec</span>
              </div>

              <div className="flex gap-2">
                {/* Weekday labels */}
                <div className="flex w-6 flex-col justify-between py-0.5 text-[10px] text-muted-foreground">
                  <span>Mon</span>
                  <span>Wed</span>
                  <span>Fri</span>
                </div>

                {/* Contribution grid */}
                <div className="flex gap-1">
                  {createWeeks(data.contributions).map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          title={`${day.count} contributions on ${formatDate(
                            day.date,
                          )}`}
                          className="h-3 w-3 rounded-[2px] transition-transform duration-150 hover:scale-125"
                          style={{
                            backgroundColor: CONTRIBUTION_COLOR,
                            opacity: getContributionOpacity(day.level),
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex items-center justify-end gap-2 text-xs text-muted-foreground">
            <span>Less</span>

            {[0.08, 0.25, 0.45, 0.7, 1].map((opacity) => (
              <span
                key={opacity}
                className="h-3 w-3 rounded-[2px]"
                style={{
                  backgroundColor: CONTRIBUTION_COLOR,
                  opacity,
                }}
              />
            ))}

            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Organize contribution days into weeks.
 */
function createWeeks(contributions: Contribution[]) {
  const weeks: Contribution[][] = [];
  let currentWeek: Contribution[] = [];

  contributions.forEach((day, index) => {
    currentWeek.push(day);

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    if (index === contributions.length - 1 && currentWeek.length > 0) {
      weeks.push(currentWeek);
    }
  });

  return weeks;
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
