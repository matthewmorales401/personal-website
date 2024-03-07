import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";


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
        alignItems: "center",
        // paddingRight: "10em",

        flexDirection: {
          "@media (max-width: 1200px)": "column-reverse",
        },

        paddingBottom: {
          "@media (max-width: 1200px)": "3em",
        },


      },

      boxContainer: {
        backgroundColor: "white",
        width: "70%",
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        padding: "1em",

      },

      firstContainer: {
        // height: "300px",
        display: "flex",
        // alignItems: "center",
        justifyContent: "center",
        // height: "1500px",
        // margin: "0 auto",

      },

      image: {
        padding: "2em",
        height: "auto",
        width: "90%",
      }


  });



  type ProjectFitnessProps = {
    src: string;
    height: string;
    width: string;
    icon: IconDefinition;
    href: string;
  };

  

export default function ProjectFitness({src, height, width, icon, href} : ProjectFitnessProps) {


    return (
        <div {...stylex.props(styles.navContainer)}>
            <div {...stylex.props(styles.firstContainer)}>
                <div {...stylex.props(styles.boxContainer)}>
                    <h3>Fitness Log</h3>
                    <i>{["HTML", "CSS", "Node.js", "MySQL"].join(' ')}</i>
                    <p>This project was developed to help users track their workout history and plan for future activities. It's a seamless solution for fitness enthusiasts who want to stay organized and motivated.</p>
                    <a href={href}>
                        <FontAwesomeIcon icon={icon}/>
                    </a>
                </div>
            </div>
            <img {...stylex.props(styles.image)} src={src} height={height} width={width}></img>

        </div>

    );



}