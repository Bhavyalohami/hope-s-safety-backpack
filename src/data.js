export const site = {
  name: "Hope's Safety Backpack",
  url: "https://bhavyalohami.github.io/hope-s-safety-backpack",
  email: "hello@hopessafetybackpack.com",
  description:
    "Hope's Safety Backpack is a student safety backpack concept created by Hope Herron to help kids feel protected, visible, prepared, and confident at school.",
  ogImage: "/assets/home-story-hero.webp",
};

export const routes = [
  { path: "/", label: "Home" },
  { path: "/features", label: "Features" },
  { path: "/story", label: "Story" },
  { path: "/financial", label: "Ambassadors" },
  { path: "/sales-agenda", label: "Sales Team" },
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
      image: "https://bhavyalohami.github.io/hope-s-safety-backpack/assets/home-story-hero.webp",
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
  "/financial": {
    title: "Student Ambassador Program | Hope's Safety Backpack",
    description:
      "Discover the supervised Hope's Safety Backpack ambassador model for student entrepreneurship, family support, referral selling, and financial literacy.",
    keywords:
      "student ambassador program, kids financial literacy, student entrepreneurship, safety backpack ambassadors",
    schema: {
      "@type": "EducationalOrganization",
      name: "Hope's Safety Backpack Ambassador Program",
      description:
        "A supervised student ambassador concept designed to teach product communication, leadership, referral selling, and money responsibility.",
    },
  },
  "/sales-agenda": {
    title: "Sales Team Agenda | Hope's Safety Backpack",
    description:
      "A clear sales team agenda for Hope's Safety Backpack covering training, parent communication, school-safe promotion, fulfillment, and compliance.",
    keywords:
      "safety backpack sales agenda, school safety sales team, backpack ambassador training",
    schema: {
      "@type": "WebPage",
      name: "Hope's Safety Backpack sales team agenda",
      description:
        "Operational sales agenda for a school-safe student safety backpack program.",
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
      "Hope's Safety Backpack forms, ambassador application, backpack preorder form, sales ambassador application",
    schema: {
      "@type": "ContactPage",
      name: "Hope's Safety Backpack forms",
      description:
        "Application and preorder resources for Hope's Safety Backpack families, schools, and community partners.",
    },
  },
};

export const safetyFeatures = [
  ["Dual camera awareness", "Front and rear camera concepts support a stronger visibility and awareness story."],
  ["LED visibility grid", "Bright multi-color lighting helps students stand out during low-light travel and arrival times."],
  ["Emergency readiness kit", "First aid, masks, sanitizer, and care supplies keep everyday safety items within reach."],
  ["Hidden GPS support", "Trackable support is positioned to give families an extra layer of peace of mind."],
  ["Charging station", "A connected charging area supports phones and small everyday electronics."],
  ["High-beam flashlight", "Forward-facing light helps students navigate darker or uncertain environments."],
  ["Flotation support", "A water-safety concept adds readiness for emergency situations near water."],
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
      "The model emphasizes guardian consent, school-approved communication, official ordering channels, referral codes, and no student-managed inventory.",
  },
];

export const agendaItems = [
  ["Vision", "Improve student safety while introducing entrepreneurship, saving, budgeting, and leadership."],
  ["Starter kit", "Demo backpack, personalized cards, and an official sales guide for clear presentations."],
  ["Training", "Product knowledge, safety messaging, communication, commission tracking, and goal setting."],
  ["Channels", "School-approved events, parent channels, and controlled online ordering."],
  ["Fulfillment", "Orders ship through official Hope's Safety Backpack channels without student inventory."],
  ["Compliance", "Guardian consent, school approval, transparent tracking, and clear promotional boundaries."],
];
