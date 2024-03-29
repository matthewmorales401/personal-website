import * as stylex from "@stylexjs/stylex";
import CompanyLink from "./CompanyLink";

import { faTwitter, faUber } from "@fortawesome/free-brands-svg-icons";

const styles = stylex.create({
  navContainer: {
    display: "flex",
    height: "300px",
    justifyContent: "space-evenly",
    alignItems: "center",

    flexDirection: {
      "@media (max-width: 1200px)": "column",
    },

    gap: {
      "@media (max-width: 1200px)": "90px",
    },

    paddingBottom: {
      "@media (max-width: 1200px)": "5em",
    },
  },

  expContainer: {
    paddingBottom: {
      "@media (max-width: 1200px)": "1em",
    },
    fontSize: "3.2em",
    fontWeight: "lighter",
  },
});

export default function Experience() {
  return (
    <div>
      <h1 {...stylex.props(styles.expContainer)}>Experience</h1>
      <div {...stylex.props(styles.navContainer)}>
        <CompanyLink
          href={"https://www.x.com/"}
          icon={faTwitter}
          role="Software Engineer Intern"
          color="#008AD8"
        />
        <CompanyLink
          href={"https://www.uber.com/"}
          icon={faUber}
          role="Uber Career Prep Fellow (SWE)"
          color="black"
        />
      </div>
    </div>
  );
}
