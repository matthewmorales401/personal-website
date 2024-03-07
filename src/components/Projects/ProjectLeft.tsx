import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
// import { isCompositeComponentWithType } from "react-dom/test-utils";
import AOS from "aos";

import { useEffect } from "react";

const styles = stylex.create({
    navContainer: {
        display: "flex",
        // height: "300px",
        // width: "2500px",
        // flexFlow: "row",
        // flexWrap: {
        //   default: "nowrap",
        //   "@media (max-width: 576px)": "wrap",
        // },
        // justifyContent: "flex-start",
        // alignItems: "center",
        // boxShadow: "2em 2em 18em white",
        justifyContent: "space-between",
        alignItems: "flex-start",

        flexDirection: {
            "@media (max-width: 1200px)": "column",
        },

        gap: {
            "@media (max-width: 1200px)": "2em",
        },
    },
      

    linkContainer: {
        display: "flex",
        justifyContent: "flex-end",

    },
    spacer: {
        // justifyContent: "flex-start",
        backgroundColor: "white",
        width: "75%",
        padding: "1em",
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",

    },

    firstContainer: {
        // height: "300px",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        // height: "1500px",
        // margin: "0 auto",

      },

    imageContainer: {
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        height: "auto",
        width: "90%",
    },

  });


  type ProjectLeftProps = {
    src: string;
    description: string;
    height: string;
    width: string;

    icon: IconDefinition;
    href: string;
  };


  

export default function ProjectLeft({src, height, width, icon, href} : ProjectLeftProps) {
    useEffect(() => {
        AOS.init({
          duration: 400,
        });
      }, []);

    let description = "A project that predicts the amount of Violent Crimes per 100K given various different input classes (family, wealth, race).\
    It consists of a linear regression ML algorithm, a web application allowing for user interaction, a research paper summarizing our findings, and a demonstrative PowerPoint Presentation."
    return (
        <div {...stylex.props(styles.navContainer)}>
            <div>
                <img data-aos="fade-right" {...stylex.props(styles.imageContainer)} src= {src} height={height} width={width}></img>
            </div>
            <div {...stylex.props(styles.firstContainer)}>
                <div {...stylex.props(styles.spacer)} data-aos="fade-left">  
                    <h3>Communities and Crimes (Front End)</h3>
                    <i>{["oui", "non"].join(' ')}</i>
                    <p>{description}</p>
                    <a href= {href}>
                        <FontAwesomeIcon icon={icon}/>
                    </a>
                </div>
            </div>

        </div>


    );



}