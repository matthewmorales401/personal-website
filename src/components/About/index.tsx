import * as stylex from "@stylexjs/stylex";
import project_one from "../../../public/images/kisspng-golden-gate-bridge-landmark-bridge-5ac54865bc6c35.0123875815228785657718.png";

const styles = stylex.create({
  aboutContainer: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "4em",
    width: "100%",
    flexDirection: {
      "@media (max-width: 800px)": "column",
    },

    gap: {
      "@media (max-width: 800px)": "90px",
    },
  },

  linkContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  boxContainer: {
    backgroundColor: "white",
    boxShadow:
      "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
    padding: "1.5em",

    width: "90%",
    boxSizing: "border-box",
    margin: "0 auto",
  },

  tagContainer: {
    backgroundColor: "white",
  },

  imageContainer: {
    height: "auto",
    width: "90%",
  },
});

export default function About() {
  const descriptionOne =
    "Hey there, I'm Matt! With a background in Computer Science from the University of California, Davis, I've delved into site reliability engineering and full-stack development at companies like Twitter and Uber.";
  const descriptionTwo =
    "Living in San Francisco, where creativity and tech meet, has been a dream. From building my first website to tackling coding challenges, my curiosity has only grown. I'm driven by excellence and a hunger for learning.";
  const descriptionThree =
    "As a recent graduate, I'm excited to contribute to impactful projects. Check out my Resume, GitHub, and LinkedIn on the top right for more information about me!";
  const descriptionFour =
    "Feel free to contact me if you  have any questions or want to learn more about me directly through my email, which you can also find on the top right!";
  return (
    <div {...stylex.props(styles.aboutContainer)} id="about">
      <div>
        <img
          {...stylex.props(styles.imageContainer)}
          src={project_one}
          height="500px"
          width="1200px"
        ></img>
      </div>
      <div>
        <div {...stylex.props(styles.boxContainer)}>
          <h3>About</h3>
          <p> {descriptionOne} </p>
          <p> {descriptionTwo} </p>
          <p> {descriptionThree} </p>
          <p> {descriptionFour} </p>
        </div>
      </div>
    </div>
  );
}
