import * as stylex from "@stylexjs/stylex";
import TextLink from "../TextLink";
import ButtonLink from "../IconLink";
import {
    faLinkedin,
    faGithub
  } from "@fortawesome/free-brands-svg-icons"

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
        // gap: "10px",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
        height: "100px",
        zIndex: "1",
      },
      linkContainer: {
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
        justifyContent: "flex-end",
        gap: "10px",
        // padding: "2em",
      },
      header: {
        lineHeight: "0",
        paddingLeft: "0.2em",
      }, 

  });

export default function Navbar() {


    return (
        <nav {...stylex.props(styles.navContainer)}>
            <h1 {...stylex.props(styles.header)}>Matthew Morales</h1>
            <nav {...stylex.props(styles.linkContainer)}>
                <TextLink  href="#top" title= "About"/>
                <TextLink   href="#projects" title= "Projects"/>
                <ButtonLink href="https://github.com/matthewmorales401" icon= {faGithub} color="black"/>
                <ButtonLink href="https://www.linkedin.com/in/matt-morales-6a7914173/" icon= {faLinkedin} color="#0077b5"/>
            </nav>

        </nav>


    );



}