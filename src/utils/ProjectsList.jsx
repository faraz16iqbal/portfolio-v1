import React from "react";
import {
  CovidProject,
  PortfolioProject,
  MulticodeProject,
} from "../assets/projects";
import ProjectImage from "../components/miscellaneous/ProjectImage";

const ProjectsList = [
  {
    name: "Portfolio Website",
    info: [
      "Built with React, framer motion and Chakra UI.",
      "Supports light and dark mode,",
      "Future plans: Migrate project to NextJS framework",
    ],
    media: <ProjectImage src={PortfolioProject} alt="Portfolio" />,
    live: null,
    repo: "https://github.com/faraz16iqbal/portfolio-v1",
  },
  {
    name: "Covid Resources Website",
    info: [
      "Built using the 2nd wave of Covid-19 in India",
      "Uses Google sheets as data layer for dynamic data fetching",
      "Website visits: 1 million +",
    ],
    media: <ProjectImage src={CovidProject} alt="Covid Resources Project" />,
    live: "https://multicode-phi.vercel.app",
    repo: "https://github.com/faraz16iqbal/multicode",
  },
  {
    name: "multicode",
    info: [
      "Collaborative code editor built using TypeScript, React and NodeJS",
      "Supports syntax higlighting for various languages",
    ],
    media: <ProjectImage src={MulticodeProject} alt="Multicode" />,
    live: "https://multicode-phi.vercel.app",
    repo: "https://github.com/faraz16iqbal/multicode",
  },
];

export default ProjectsList;
