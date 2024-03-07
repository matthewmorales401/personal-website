import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";


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
        justifyContent: "center",
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
          "@media (max-width: 600px)": "auto",
        },

        width: {
          "@media (max-width: 600px)": "40%",
        },
      },



  });


  type ProjectSliceProps = {
    src: string;
    height: string;
    width: string;

    icon: IconDefinition;
    href: string;
  };


  

export default function ProjectSlice({src, height, width, icon, href} : ProjectSliceProps) {


    return (
        <div {...stylex.props(styles.navContainer)}>
            <div>
                <img {...stylex.props(styles.imageContainer)}  src= {src} height={height} width={width}></img>
            </div>
            <div>
                <div {...stylex.props(styles.boxContainer)}>
                    <h3>Slice the Pie</h3>
                    <i {...stylex.props(styles.tagContainer)}>{["React", "Node.js", "HTML", "D3"].join(' ')}</i>
                    <p>This project was created to provide users with an interactive way to compare their guesses of UC Davis administration expenditures with the actual data. It's an engaging tool that utilizes React and D3 to visualize financial information through dynamic pie charts.</p>
                    <a href= {href}>
                        <FontAwesomeIcon icon={icon}/>
                    </a>
                </div>
            </div>

        </div>


    );



}