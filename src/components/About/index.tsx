import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import project_one from "../../../public/images/kisspng-golden-gate-bridge-landmark-bridge-5ac54865bc6c35.0123875815228785657718.png"


const styles = stylex.create({
    navContainer: {
        display: "flex",
        // height: "300px",
        // width: "2500px",
        // flexFlow: "row",
        // flexWrap: {
          // default: "nowrap",
        //   "@media (max-width: 576px)": "wrap",
        // },
        // justifyContent: "flex-start",
        // alignItems: "center",
        // boxShadow: "2em 2em 18em white",
        justifyContent: "center",
        paddingTop: "4em",
        width: "100%",
        flexDirection: {
          "@media (max-width: 1200px)": "column",
        },

        
        gap: {
          "@media (max-width: 1200px)": "90px",
        },
      },

      linkContainer: {
        display: "flex",
        justifyContent: "flex-end",

      },
      boxContainer: {
        backgroundColor: "white",
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        padding: "1.5em",

        width: "90%",
        boxSizing: "border-box",
        margin: "0 auto",

      },

      tagContainer: {
        backgroundColor: "white",
        
      },

      imageContainer: {
        height: "auto",
        width: "90%",
      },


  });


  type ProjectSliceProps = {
    src: string;
    height: string;
    width: string;

    icon: IconDefinition;
    href: string;
  };


  

export default function About({icon, href} : ProjectSliceProps) {

    let descriptionOne = "Hey there, I'm Matthew! A Bay Area local with a lifelong fascination for all things tech. From tinkering with gadgets as a kid to earning my degree in Computer Science at the University of California, Davis, my passion for technology has been a constant in my life. I've had the incredible opportunity to immerse myself in site reliability engineering and full-stack development, gaining valuable experience at influential companies like Twitter and Uber." 
    let descriptionTwo = "Growing up in the innovation hub of San Francisco has been a dream come true. It's a place where creativity and technology merge seamlessly. Whether it was building my first website or diving into coding challenges, my curiosity for the field has only deepened over the years."
    let descriptionThree = "These formative experiences have not only honed my technical skills but have also instilled in me a drive for excellence and a thirst for continuous learning. As a recent graduate, I'm excited to leverage my background in tech to contribute to impactful projects. Whether it's optimizing systems for reliability or creating intuitive user experiences, I'm eager for the opportunities that await in my journey as a tech professional."

    return (
        <div {...stylex.props(styles.navContainer)} id="about">
            <div>
                <img {...stylex.props(styles.imageContainer)} src= {project_one} height= "500px" width= "1200px"></img>
            </div>
            <div>
                <div {...stylex.props(styles.boxContainer)}>
                    <h3>About</h3>
                    <p> {descriptionOne} </p>
                    <p> {descriptionTwo} </p>
                    <p> {descriptionThree} </p>

                    <a href= {href}>
                        <FontAwesomeIcon icon={icon}/>
                    </a>
                </div>
            </div>

        </div>


    );



}