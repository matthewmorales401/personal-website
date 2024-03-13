import * as stylex from "@stylexjs/stylex";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const styles = stylex.create({
    navContainer: {
        display: "flex",
        padding: "0",
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
        alignItems: "center",
        height: "100%",
        backgroundColor: {
          ':hover': "#B2B2B2",
        },
        // width: "100$"
      },
      linkContainer: {
        height: "100%",
        alignItems: "center",

      },

    //   spacer: {
    //     // justifyContent: "flex-start",
    //     backgroundColor: "white",
    //     width: "90%",
    //     padding: "1em",
    //     boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",



    // },
  });


  type ProjectLeftProps = {
    href: string,
    icon: IconDefinition,
    role: string,
    color: string,
  };


  

export default function CompanyLink({href, icon, role, color} : ProjectLeftProps) {


    return (
          <div {...stylex.props(styles.linkContainer)} >
            <div>
              <h2>{role}</h2>
            </div>
            <a  {...stylex.props(styles.navContainer)} href={href}>
                <FontAwesomeIcon icon={icon} size="3x" color={color}/>
            </a>

          </div>



    );



}