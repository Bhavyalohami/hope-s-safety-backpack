export const site = {
  name: "Hope's Safety Backpack",
  email: "hopeherronsafetybackpack77@yahoo.com",
  description:
    "Hope's Safety Backpack is a student safety backpack concept created by Hope Herron to help kids feel protected, visible, prepared, and confident at school.",
  ogImage: "/assets/home-story-hero.webp",
};

export const routes = [
  { path: "/", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/story", label: "Story" },
  { path: "/ambassadors", label: "Helpers" },
  { path: "/helper-team", label: "Team Guide" },
  { path: "/safety-club", label: "Safety Club" },
  { path: "/forms", label: "Forms", cta: true },
];

export const routeMeta = {
  "/": {
    title: "Hope's Safety Backpack | Student Safety Backpack Concept",
    description:
      "Explore Hope's Safety Backpack, a student-led safety backpack concept with LED visibility, emergency readiness, GPS support, safety education, and family-focused programs.",
    keywords:
      "student safety backpack, Hope's Safety Backpack, school safety backpack, emergency backpack for students, LED safety backpack",
    schema: {
      "@type": "Product",
      name: "Hope's Safety Backpack",
      brand: { "@type": "Brand", name: "Hope's Safety Backpack" },
      description:
        "A student safety backpack concept combining visibility, emergency preparedness, GPS support, and student confidence programs.",
      image: "/assets/home-story-hero.webp",
      category: "Student safety backpack",
    },
  },
  "/features": {
    title: "Backpack Safety Features | Hope's Safety Backpack",
    description:
      "Review the safety feature system behind Hope's Safety Backpack, including LED visibility, first aid, GPS support, charging, camera awareness, and protective materials.",
    keywords:
      "backpack safety features, GPS backpack, LED backpack, emergency backpack, first aid backpack",
    schema: {
      "@type": "Product",
      name: "Hope's Safety Backpack safety feature system",
      description:
        "Feature overview for a school-ready backpack concept focused on visibility, emergency readiness, tracking support, and everyday confidence.",
    },
  },
  "/story": {
    title: "Hope Herron's Story | Hope's Safety Backpack",
    description:
      "Learn how Hope Herron's childhood idea grew from a COVID safety backpack into a broader mission for student confidence, protection, and preparedness.",
    keywords:
      "Hope Herron, student inventor, safety backpack story, youth entrepreneur, school safety idea",
    schema: {
      "@type": "AboutPage",
      name: "Hope Herron's story",
      description:
        "The story behind Hope's Safety Backpack and the student-led mission to help kids feel safer at school.",
    },
  },
  "/ambassadors": {
    title: "Student Helper Program | Hope's Safety Backpack",
    description:
      "Discover the supervised Hope's Safety Backpack helper program for student confidence, family support, kind sharing, and school-safe leadership.",
    keywords:
      "student helper program, student safety leadership, kids safety program, safety backpack ambassadors",
    schema: {
      "@type": "EducationalOrganization",
      name: "Hope's Safety Backpack Student Helper Program",
      description:
        "A supervised student helper concept designed to teach clear communication, kindness, confidence, and responsibility.",
    },
  },
  "/helper-team": {
    title: "Helper Team Guide | Hope's Safety Backpack",
    description:
      "A clear helper team playbook for Hope's Safety Backpack covering practice, parent communication, school-safe sharing, official next steps, and permission-first rules.",
    keywords:
      "safety backpack playbook, school safety helper team, backpack ambassador training",
    schema: {
      "@type": "WebPage",
      name: "Hope's Safety Backpack helper team guide",
      description:
        "Helper team guide for a school-safe student safety backpack program.",
    },
  },
  "/safety-club": {
    title: "Safety Patrol Club | Hope's Safety Backpack",
    description:
      "Explore the Hope's Safety Backpack Safety Patrol Club concept for kindness, peer leadership, safe actions, positive behavior points, and school rewards.",
    keywords:
      "safety patrol club, student safety club, school kindness program, positive behavior rewards",
    schema: {
      "@type": "EducationalOrganization",
      name: "Hope's Safety Patrol Club",
      description:
        "A student safety and kindness club concept built around recognition, positive actions, and peer leadership.",
    },
  },
  "/forms": {
    title: "Applications and Preorder Forms | Hope's Safety Backpack",
    description:
      "Access Hope's Safety Backpack ambassador application and preorder form resources for families interested in the product and student programs.",
    keywords:
      "Hope's Safety Backpack forms, ambassador application, backpack preorder form, safety backpack application",
    schema: {
      "@type": "ContactPage",
      name: "Hope's Safety Backpack forms",
      description:
        "Application and preorder resources for Hope's Safety Backpack families, schools, and community partners.",
    },
  },
};

export const safetyFeatures = [
  ["Look-around camera idea", "Front and rear camera concepts help tell the story of watching out for students."],
  ["Bright LED lights", "Multi-color lighting helps students stand out during low-light travel and arrival times."],
  ["Ready kit pocket", "First aid, masks, sanitizer, and care supplies keep helpful safety items within reach."],
  ["Find-me GPS support", "Trackable support gives families another way to feel calm and connected."],
  ["Charging spot", "A connected charging area supports phones and small everyday electronics."],
  ["Big flashlight", "Forward-facing light helps students navigate darker or uncertain environments."],
  ["Water safety idea", "A water-safety concept adds readiness for emergency situations near water."],
  ["Protective shell", "Clear materials and protected compartments are presented as part of the safety system."],
];

export const faqs = [
  {
    question: "Is Hope's Safety Backpack available for purchase today?",
    answer:
      "The site presents the product concept, program information, and interest forms. Families can use the available documents to learn more and share early interest.",
  },
  {
    question: "How should families use the forms?",
    answer:
      "Families can review the information requested, download the supplied documents, and contact the Hope's Safety Backpack team for the official next step.",
  },
  {
    question: "What makes the backpack different from a normal school bag?",
    answer:
      "The concept combines visibility, emergency readiness, GPS support, charging, protective materials, and student-focused safety education in one connected product story.",
  },
  {
    question: "How does the ambassador program stay school-safe?",
    answer:
      "The model emphasizes guardian consent, school-approved communication, official next steps, simple helper cards, and no student-handled orders.",
  },
];

export const agendaItems = [
  ["Mission", "Help kids feel seen, ready, brave, and kind during the school day."],
  ["Helper kit", "Demo backpack, colorful cards, and a tiny script kids can practice with a grown-up."],
  ["Practice", "Safety words, listening skills, kind answers, and a simple goal chart."],
  ["Safe places", "School-approved events, parent channels, and friendly community tables."],
  ["Official path", "Families use the official Hope's Safety Backpack forms and contact details."],
  ["Permission", "Guardian consent, school approval, and clear helper boundaries come first."],
];
