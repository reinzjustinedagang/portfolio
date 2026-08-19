import { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    title:
      "Office for Senior Citizens Affairs Information Management System with SMS Notification",
    description:
      "A web-based information management system designed for the Office for Senior Citizens Affairs (OSCA) to manage senior citizen records, benefits, pensions, events, and notifications.",
    image: "/OSCA_mockup.png",
    tags: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    problem:
      "Senior citizen information and administrative records required an organized system for managing registrations, benefits, pensions, events, and other OSCA-related information.",
    solution:
      "Developed a centralized web-based management system with role-based access, searchable senior citizen records, benefit and pension management, SMS notifications, reports, and administrative tools.",
    role: "Full-stack developer — frontend development, backend API development, database design, system features, and UI implementation.",
    features: [
      "Senior citizen registration and information management",
      "Search, filtering, sorting, and pagination",
      "Benefits, discounts, pensions, and events management",
      "SMS notification and message management",
      "User management and role-based access",
      "Reports and audit logging",
      "Responsive administrative dashboard",
    ],
    outcome:
      "Provided OSCA with a centralized platform for managing senior citizen information and administrative processes more efficiently.",
  },
  {
    title: "OJT Portfolio Website",
    description:
      "A responsive digital OJT portfolio built with React.js to organize and present my complete internship documentation, work experiences, company information, assessments, and supporting documents.",

    image: "/ojt-portfolio.svg",

    tags: ["React.js", "JavaScipt", "Tailwind CSS", "Vercel"],

    liveUrl: "https://reinzjustinedagang-ojt-portfolio.vercel.app",
    repoUrl: "https://github.com/reinzjustinedagang/reinz-ojt-portfolio",

    problem:
      "Traditional OJT portfolios are often presented as printed documents, making them difficult to navigate, access, and present digitally. My internship documentation contained multiple chapters, reports, forms, certificates, and supporting documents that needed to be organized in a clear and accessible way.",

    solution:
      "Developed a responsive React.js web application that transforms my complete OJT portfolio into an organized digital experience. The website uses structured navigation and dedicated sections for each part of the internship documentation, making the portfolio easier to browse and present.",

    role: "Frontend developer — designed and developed the website structure, user interface, navigation, responsive layouts, document presentation, and interactive components using React.js and Tailwind CSS.",

    features: [
      "Digital OJT portfolio presentation",
      "Interactive table of contents",
      "Title page and personal information",
      "Personal philosophy and career plan",
      "Internship introduction and objectives",
      "Company profile and organizational structure",
      "Weekly accomplishment reports",
      "Daily time records",
      "Internship progress and analysis reports",
      "Student internship evaluation",
      "Supporting documents and appendices",
      "Certificate and internship documentation",
      "Internship photos and office work documentation",
      "Curriculum Vitae",
      "Responsive design for desktop and mobile",
    ],

    outcome:
      "Created a centralized digital version of my OJT portfolio that makes my internship experience, accomplishments, documentation, and supporting materials easier to navigate, present, and access.",
  },
  {
    title: "BasaTayo",
    description:
      "A Filipino educational mobile application designed to help children practice Tagalog reading and writing through interactive lessons and tracing activities.",
    image: "/BasaTayo_mockup.png",
    tags: ["React Native", "Expo", "JavaScript", "NativeWind"],
    liveUrl: "#",
    repoUrl: "#",
    problem:
      "Children need engaging and accessible ways to practice Filipino reading and writing beyond traditional worksheets and classroom activities.",
    solution:
      "Developed a mobile learning experience with Filipino letters, words, syllables, interactive tracing exercises, and child-friendly visual feedback.",
    role: "Mobile developer — React Native development, UI implementation, interactive tracing functionality, content structure, and application navigation.",
    features: [
      "Filipino letter and word lessons",
      "Interactive letter tracing",
      "Tagalog reading and writing activities",
      "Syllable-based learning content",
      "Sticker and reward concepts",
      "Mobile-friendly child-focused interface",
      "Offline-friendly content structure",
    ],
    outcome:
      "Created an interactive mobile learning platform focused on making Filipino reading and writing practice more engaging for children.",
  },

  {
    title: "Hotel Management System",
    description:
      "A desktop hotel management application for managing rooms, guests, reservations, check-ins, check-outs, payments, reports, and users.",
    image: "/a387ee0c-2e34-4302-a53e-b696cc17384b.jpg",
    tags: ["C#", "Windows Forms", "MySQL"],
    liveUrl: "#",
    repoUrl: "#",
    problem:
      "Hotel operations require coordinated management of rooms, guests, reservations, payments, and check-in and check-out activities.",
    solution:
      "Designed a Windows Forms application with a structured database and repository/service architecture to organize core hotel management operations.",
    role: "Software developer — application architecture, C# development, database integration, repository and service implementation, and UI development.",
    features: [
      "Room management",
      "Guest management",
      "Reservation management",
      "Check-in and check-out processing",
      "Payment management",
      "Reports and dashboard",
      "User management",
      "MySQL database integration",
    ],
    outcome:
      "Built a structured desktop application that demonstrates practical C# software development, database management, and layered application architecture.",
  },

  {
    title: "Business Process Management",
    description:
      "A business process solution for designing and managing procurement workflows from request through payment.",
    image: "/17d41858-8acf-4346-a349-ec055791d25d.jpg",
    tags: ["React", "JavaScript", "Business Analysis", "Workflow"],
    liveUrl: "#",
    repoUrl: "#",
    problem:
      "Business processes can become difficult to track when requests, approvals, purchasing, delivery, invoicing, and payments are handled across disconnected steps.",
    solution:
      "Worked on a business process solution that models procurement workflows and organizes the lifecycle from request and approval through purchase, delivery, invoice, and payment.",
    role: "Business Analyst Intern — business process design, requirements analysis, data encoding, regression testing, bug identification, and collaboration with the development team.",
    features: [
      "Procurement workflow modeling",
      "Request and approval process",
      "Purchase and delivery stages",
      "Invoice and payment workflow",
      "Business rule documentation",
      "Regression testing",
      "Bug identification and reporting",
    ],
    outcome:
      "Gained practical experience translating business requirements and rules into structured processes while collaborating with a software development team.",
  },
];
