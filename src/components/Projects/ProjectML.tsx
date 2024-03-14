import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const styles = stylex.create({
  projectContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",

    flexDirection: {
      "@media (max-width: 1500px)": "column",
    },

    gap: {
      "@media (max-width: 1500px)": "2em",
    },
  },

  linkContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
  spacer: {
    backgroundColor: "white",
    width: "75%",
    padding: "1em",
    boxShadow:
      "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
  },

  firstContainer: {
    display: "flex",
    justifyContent: "center",
  },

  imageContainer: {
    boxShadow:
      "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
    height: {
      default: "700px",
      "@media (max-width: 1500px)": "auto",
    },

    width: {
      default: "65%",
      "@media (max-width: 1500px)": "60%",
    },
  },

  imageBox: {
    width: "100%",
  },
});

type ProjectMLProps = {
  src: string;
  description: string;
  height: string;
  width: string;

  icon: IconDefinition;
  href: string;
};

export default function ProjectML({
  src,
  height,
  width,
  icon,
  href,
}: ProjectMLProps) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  const description =
    "A project that predicts the amount of Violent Crimes per 100K given various different input classes (family, wealth, race).\
    It consists of a linear regression ML algorithm, a web application allowing for user interaction, a research paper summarizing our findings, and a demonstrative PowerPoint Presentation.";
  return (
    <div {...stylex.props(styles.projectContainer)}>
      <div {...stylex.props(styles.imageBox)}>
        <img
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          {...stylex.props(styles.imageContainer)}
          src={src}
          height={height}
          width={width}
        ></img>
      </div>
      <div {...stylex.props(styles.firstContainer)}>
        <div
          {...stylex.props(styles.spacer)}
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h3>Communities and Crimes (Front End)</h3>
          <i>{["React", "Node.js", "HTML", "CSS", "Python"].join(" ")}</i>
          <p>{description}</p>
          <a href={href}>
            <FontAwesomeIcon icon={icon} size="2x" color="black" />
          </a>
        </div>
      </div>
    </div>
  );
}
