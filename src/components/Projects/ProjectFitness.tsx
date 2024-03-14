import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useEffect } from "react";
import AOS from "aos";

const styles = stylex.create({
  projectContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    flexDirection: {
      "@media (max-width: 800px)": "column-reverse",
    },

    paddingBottom: {
      "@media (max-width: 800px)": "3em",
    },
  },

  boxContainer: {
    backgroundColor: "white",
    width: "70%",
    boxShadow:
      "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)",
    padding: "1em",
  },

  firstContainer: {
    display: "flex",
    justifyContent: "center",
  },

  image: {
    padding: "2em",
    height: "auto",
    width: "90%",
  },

  gitBox: {},
});

type ProjectFitnessProps = {
  src: string;
  height: string;
  width: string;
  icon: IconDefinition;
  href: string;
};

export default function ProjectFitness({
  src,
  height,
  width,
  icon,
  href,
}: ProjectFitnessProps) {
  useEffect(() => {
    AOS.init({
      duration: 400,
    });
  }, []);

  return (
    <div {...stylex.props(styles.projectContainer)}>
      <div {...stylex.props(styles.firstContainer)}>
        <div
          {...stylex.props(styles.boxContainer)}
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
        >
          <h3>Fitness Log</h3>
          <i>{["HTML", "CSS", "Node.js", "MySQL"].join(" ")}</i>
          <p>
            This project was developed to help users track their workout history
            and plan for future activities. It's a seamless solution for fitness
            enthusiasts who want to stay organized and motivated.
          </p>
          <a {...stylex.props(styles.gitBox)} href={href}>
            <FontAwesomeIcon icon={icon} color="black" size="2x" />
          </a>
        </div>
      </div>
      <div>
        <img
          data-aos="zoom-in-down"
          data-aos-delay="200"
          data-aos-easing="ease-in-sine"
          {...stylex.props(styles.image)}
          src={src}
          height={height}
          width={width}
        />
      </div>
    </div>
  );
}
