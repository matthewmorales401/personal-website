import * as stylex from "@stylexjs/stylex";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = stylex.create({
    iconContainer: {
        display: "flex",
        backgroundColor: {
          ':hover': "#B2B2B2",
        },
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
        <a  {...stylex.props(styles.iconContainer)} href={href}>
          <FontAwesomeIcon  icon={icon} size="2x" color={color}/>
        </a>


    );



}