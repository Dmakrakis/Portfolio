export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "jobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "Company Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    { name: "dateStarted", title: "Date Started", type: "date" },
    { name: "dateEnded", title: "Date Ended", type: "date" },
    {
      name: "isCurrentlyWorkingHere",
      title: "isCurrentlyWorkingHere",
      type: "boolean",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "skill" } }],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
