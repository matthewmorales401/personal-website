import * as stylex from "@stylexjs/stylex";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const styles = stylex.create({
    navContainer: {
        display: "flex",
        padding: "0",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: {
          ':hover': "#B2B2B2",
        },
        width: "100%",

      },

      role: {
        fontSize: {
          "@media (max-width: 800px)": "20px",
        }
      },


      linkContainer: {
        height: "100%",
        alignItems: "center",
        width: "100%",


      },

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
              <h2 {...stylex.props(styles.role)}>{role}</h2>
            </div>
            <a  {...stylex.props(styles.navContainer)} href={href}>
                <FontAwesomeIcon icon={icon} size="3x" color={color}/>
            </a>

          </div>



    );



}