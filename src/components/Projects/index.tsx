import * as stylex from "@stylexjs/stylex";
import ProjectLeft from "./ProjectLeft";
import ProjectRight from "./ProjectRight";
import project_two from "../../images/Screenshot 2024-02-21 232319-front.png";
import project_one from "../../../public/images/Screenshot 2024-02-22 152617-portrait.png"
import project_three from "../../../public/images/Screenshot 2024-02-22 092424.png";
import ProjectSlice from "./ProjectSlice";
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons"


const styles = stylex.create({
    navContainer: {
        display: "flex",
        // height: "300px",
        width: "300px",
        // flexFlow: "row",
        // flexWrap: {
        //   default: "nowrap",
        //   "@media (max-width: 576px)": "wrap",
        // },
        // justifyContent: "flex-start",s
        // alignItems: "center",
        // boxShadow: "2em 2em 18em white",
        backgroundColor: "#rgba(255, 255, 255, 0.87)",
        alignItems: "center",
      
      },
      header: {
        marginBottom: "190px",
        fontWeight: "lighter",
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
          <ProjectSlice {...stylex.props(styles.navContainer)} src = {project_one}  height="600px" width="300px" icon={faGithub} href="https://github.com/matthewmorales401/Slice-the-Pie"></ProjectSlice>
          <ProjectRight {...stylex.props(styles.navContainer)} src = {project_two}  height="1000px" width="1000px"  icon={faGithub} href="https://github.com/matthewmorales401/fitness-log"></ProjectRight>
          <ProjectLeft src={project_three} description = "Cooler!" height="600px" width="700px" icon={faGithub} href="https://github.com/vedantapte/ECS-171-Group-Project"></ProjectLeft>
        </div>


    );



}