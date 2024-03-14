import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
    textLinkContainer: {
        display: "flex",
        backgroundColor: {
          ':hover': "#B2B2B2",
        },
        color: "#797270",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "inherit",
        padding: "2em",
        fontWeight: "500", 
      },

  });


  type TextLinkProps = {
    href: string;
    title: string;
  };

  

export default function TextLink({href, title} : TextLinkProps) {


    return (
          <a {...stylex.props(styles.textLinkContainer)} href={href}>{title}</a>


    );



}