import * as stylex from "@stylexjs/stylex";

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
        color: "#797270",
        justifyContent: "center",
        alignItems: "center",
      },

      textLinkContainer: {
        height: "100%",
        backgroundColor: {
          ':hover': "#B2B2B2",
        },
      },


  });


  type TextLinkProps = {
    href: string;
    title: string;
  };

  

export default function ButtonLink({href, title} : TextLinkProps) {


    return (
          <a {...stylex.props(styles.navContainer)} href={href}>{title}</a>


    );



}