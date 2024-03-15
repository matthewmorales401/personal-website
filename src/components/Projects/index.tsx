import * as stylex from "@stylexjs/stylex";
import ProjectML from "./ProjectML";
import ProjectFitness from "./ProjectFitness";
import project_two from "../../images/fitness-log.png";
import project_one from "../../images/slice-the-pie.png";
import project_three from "../../images/machine-learning-project.png";
import ProjectSlice from "./ProjectSlice";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const styles = stylex.create({
  navContainer: {
    display: "flex",
    width: "300px",
    backgroundColor: "#rgba(255, 255, 255, 0.87)",
    alignItems: "center",
  },
  header: {
    marginBottom: "190px",
    fontWeight: "lighter",
    fontSize: "3.2em",
  },

  wholeContainer: {
    paddingTop: "3em",
    paddingBottom: "10em",
  },
});

export default function Projects() {
  return (
    <div {...stylex.props(styles.wholeContainer)} id="projects">
      <div>
        <h1 {...stylex.props(styles.header)}>Projects</h1>
      </div>
      <ProjectSlice
        {...stylex.props(styles.navContainer)}
        src={project_one}
        height="600px"
        width="300px"
        icon={faGithub}
        href="https://github.com/matthewmorales401/Slice-the-Pie"
      ></ProjectSlice>
      <ProjectFitness
        {...stylex.props(styles.navContainer)}
        src={project_two}
        height="1000px"
        width="1000px"
        icon={faGithub}
        href="https://github.com/matthewmorales401/fitness-log"
      ></ProjectFitness>
      <ProjectML
        src={project_three}
        description="Cooler!"
        height="600px"
        width="700px"
        icon={faGithub}
        href="https://github.com/vedantapte/ECS-171-Group-Project"
      ></ProjectML>
    </div>
  );
}
