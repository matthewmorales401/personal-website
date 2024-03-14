import * as stylex from "@stylexjs/stylex";
import TextLink from "../TextLink";
import ButtonLink from "../IconLink";
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const styles = stylex.create({
    navContainer: {
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        height: "auto",
        maxHeight:{
          default: "100px",
          "@media (max-width: 800px)": "700px",
        },
        zIndex: "1",
      },
      linkContainer: {
        display: "flex",
        justifyContent: "flex-end",
        gap: "10px",
        flexShrink: "1",
        fontSize: {
          "@media (max-width: 800px)": "12.5px",
        },
      },
      navHeader: {
        lineHeight: "0",
        paddingLeft: "0.2em",
        
        fontSize: {
          default: "50px",
          "@media (max-width: 1200px)": "0px",
          "@media (max-width: 800px)": "30px",

        },
        justifyContent: "center",

      }, 

      menu: {
        display: {
          default: "none",
          "@media (max-width: 800px)": "flex",
        },
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      },

      menuCollapsed: {
        display: {
          default: "flex",
          "@media (max-width: 800px)": "none",
        },


      },

      menuNotCollapsed: {
        display: "flex",
        flexDirection: {
          default: "column",
          "@media (min-width: 800px)": "row",
        },
      },

  });

export default function Navbar() {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleClick = () => {
      setIsCollapsed((prevState) => !prevState);
    };

    const styledNavLinkStyles = stylex.props(
      styles.menu,
      isCollapsed ? styles.menuCollapsed : styles.menuNotCollapsed,
    );


    return (
        <nav {...stylex.props(styles.navContainer)}>
            <h1 {...stylex.props(styles.navHeader)}>Matt Morales</h1>
            <nav {...stylex.props(styles.linkContainer)}>
                <div {...stylex.props(styles.menu)} onClick={handleClick}>
                  <FontAwesomeIcon icon={faBars} size="3x" />
                </div>
                <div {...styledNavLinkStyles}>
                  <TextLink  href="#top" title= "About"/>
                  <TextLink   href="#projects" title= "Projects"/>
                  <TextLink   href="../../public/Morales_Matthew_Resume2022 (2).pdf" title= "Resume"/>
                  <ButtonLink href="https://github.com/matthewmorales401" icon= {faGithub} color="black"/>
                  <ButtonLink href="https://www.linkedin.com/in/matt-morales-6a7914173/" icon= {faLinkedin} color="#0077b5"/>
                  <ButtonLink href="mailto:matthewmoralestech@gmail.com" icon= {faEnvelope} color="black"/>
                </div>
            </nav>

        </nav>


    );



}