import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  footerContainer: {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    height: "100px",
    alignItems: "center",
    whiteSpace: "pre-wrap",
    bottom: "0px",
  },
});

export default function Contact() {
  return (
    <footer {...stylex.props(styles.footerContainer)}>
      <p>
        Matt Morales ©{new Date().getFullYear()} {"\n"} This 100% custom
        website is open source. You can find the code on GitHub.{" "}
      </p>
    </footer>
  );
}
