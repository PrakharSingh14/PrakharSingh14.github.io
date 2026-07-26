export const profile = {
  fullName: "Prakhar Singh",
  title: "Doctoral Student, Solar Astrophysicist", // Shown under your photo in the sidebar
  tagline: "PhD Researcher | Solar Physics | ARIES | IIT Roorkee", // Shown on the homepage, under your name
  institute: "ARIES, Nainital · IIT Roorkee",
  thesisTitle:
    "Solar Eruptions Across Different Scales: Energetics and Coupled Dynamics",
  author_name: "P. Singh", // Author name to be highlighted in the papers section
  // Short tags shown on the homepage and Research page — add more any time
  key_interests: [
    "Solar Flares",
    "Solar Jet Dynamics and Evolution",
    "Jet-CME Relationship",
    "X-ray Spectroscopy",
    "Magnetic Field Extrapolation",
    "DEM Analysis",
  ],
};

export const contact = {
  addressLines: [
    "Room 705 (Main Building)",
    "Aryabhatta Research Institute of Observational Sciences (ARIES)",
    "Manora Peak",
    "Nainital, India",
  ],
  // Shown as text alongside the primary email button on the Contact page
  secondaryEmail: "prakhar@aries.res.in",
};

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
  email: "prakhar.aries@gmail.com",
  linkedin: "https://www.linkedin.com/in/prakhar-singh-52a49416b",
  x: "",
  bluesky: "",
  github: "https://github.com/PrakharSingh14",
  gitlab: "",
  scholar: "https://scholar.google.com/citations?user=CNU4KyAAAAAJ&hl=en",
  inspire: "",
  arxiv: "",
  orcid: "https://orcid.org/0009-0005-1007-9159",
  instagram: "",
  aries: "https://www.aries.res.in/people/user-profile/res/992",
};

export const template = {
  website_url: "https://prakharsingh14.github.io", // Astro needs to know your site's deployed URL to generate a sitemap. It must start with http:// or https://
  menu_left: false,
  transitions: true,
  lightTheme: "solar", // Custom Daisy UI theme, see tailwind.config.mjs
  darkTheme: "corona",
  excerptLength: 200,
  postPerPage: 5,
  base: "", // Repository name starting with /
};

export const seo = {
  default_title: "Prakhar Singh — Solar Physics",
  default_description:
    "Prakhar Singh, PhD researcher in solar physics at ARIES / IIT Roorkee. X-ray spectroscopic diagnostics of solar flares and coronal jet dynamics using Aditya-L1, SDO, IRIS and Hinode.",
  default_image: "",
};
