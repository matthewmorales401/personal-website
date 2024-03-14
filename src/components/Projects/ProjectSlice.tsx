import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";

import { useEffect } from "react";

const styles = stylex.create({
    projectContainer: {
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          "@media (max-width: 800px)": "column",
        },

        gap: {
          "@media (max-width: 800px)": "90px",
        },
        
      },

      linkContainer: {
        display: "flex",
        justifyContent: "flex-end",

      },
      boxContainer: {
        backgroundColor: "white",
        width: "80%",
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        padding: "1.5em",
        boxSizing: "border-box",
        margin: "0 auto",

      },

      tagContainer: {
        backgroundColor: "white",
        
      },

      
      imageContainer: {
        height: {
          "@media (max-width: 800px)": "auto",
        },

        width: {
          "@media (max-width: 800px)": "40%",
        },
      },

      imageBox: {
        width: "100%",
      }

  });


  type ProjectSliceProps = {
    src: string;
    height: string;
    width: string;

    icon: IconDefinition;
    href: string;
  };


  

export default function ProjectSlice({src, height, width, icon, href} : ProjectSliceProps) {


    useEffect(() => {
      AOS.init({
        duration: 400,
      });
    }, []);

    return (
        <div {...stylex.props(styles.projectContainer)}>
            <div {...stylex.props(styles.imageBox)}>
                <img  data-aos="fade-right" {...stylex.props(styles.imageContainer)}  src= {src} height={height} width={width}  data-aos-delay="200"  data-aos-easing="ease-in-sine"></img>
            </div>
            <div>
                <div data-aos="fade-left" {...stylex.props(styles.boxContainer)}  data-aos-delay="200"  data-aos-easing="ease-in-sine">
                    <h3>Slice the Pie</h3>
                    <i {...stylex.props(styles.tagContainer)}>{["React", "Node.js", "HTML", "D3"].join(' ')}</i>
                    <p>This project was created to provide users with an interactive way to compare their guesses of UC Davis administration expenditures with the actual data. It's an engaging tool that utilizes React and D3 to visualize financial information through dynamic pie charts.</p>
                    <a href= {href}>
                        <FontAwesomeIcon icon={icon} color="black" size="2x"/>
                    </a>
                </div>
            </div>

        </div>


    );



}