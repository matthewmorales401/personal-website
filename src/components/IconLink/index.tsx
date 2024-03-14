import * as stylex from "@stylexjs/stylex";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        backgroundColor: {
          ':hover': "#B2B2B2",
        },
        // justifyContent: "flex-end",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "inherit",
        padding: "2em",
        fontWeight: "500", 
      },

  });


  type IconLinkProps = {
    href: string;
    icon: IconDefinition;
    color: string;
  };

  

export default function IconLink({href, icon, color} : IconLinkProps) {


    return (
        <a  {...stylex.props(styles.navContainer)} href={href}>
          <FontAwesomeIcon  icon={icon} size="2x" color={color}/>
        </a>


    );



}