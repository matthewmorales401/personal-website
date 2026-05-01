import slicePie from "../images/slice-the-pie.png";
import fitnessLog from "../images/fitness-log.png";
import mlProject from "../images/machine-learning-project.png";

export type Project = {
  title: string;
  tags: string[];
  description: string;
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    title: "Slice the Pie",
    tags: ["React", "Node.js", "D3"],
    description:
      "An interactive visualization that lets users guess UC Davis administration expenditures and compare against the real numbers. Built with React + D3 dynamic pie charts.",
    image: slicePie,
    imageAlt: "Slice the Pie: interactive D3 pie chart of UC Davis spending",
    links: [
      { label: "GitHub", href: "https://github.com/matthewmorales401/Slice-the-Pie" },
    ],
  },
  {
    title: "Fitness Log",
    tags: ["Node.js", "MySQL", "HTML", "CSS"],
    description:
      "A full-stack workout tracker that lets users log past sessions and plan future ones. Server-rendered with a MySQL backend.",
    image: fitnessLog,
    imageAlt: "Fitness Log: workout tracking dashboard",
    links: [
      { label: "GitHub", href: "https://github.com/matthewmorales401/fitness-log" },
    ],
  },
  {
    title: "Communities and Crimes",
    tags: ["Python", "React", "Linear Regression"],
    description:
      "A linear regression model that predicts violent crimes per 100K given socioeconomic inputs (family, wealth, race), wrapped in a React UI for interactive exploration. Built as a group ML capstone.",
    image: mlProject,
    imageAlt: "Communities and Crimes ML project: prediction dashboard",
    links: [
      { label: "GitHub", href: "https://github.com/vedantapte/ECS-171-Group-Project" },
    ],
  },
];
