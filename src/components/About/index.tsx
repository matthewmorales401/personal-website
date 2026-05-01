import * as stylex from "@stylexjs/stylex";
import heroImage from "../../images/golden-gate-bridge.png";

const styles = stylex.create({
  section: {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    paddingLeft: "var(--space-page)",
    paddingRight: "var(--space-page)",
    paddingTop: "clamp(3rem, 8vw, 6rem)",
    paddingBottom: "var(--space-section)",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "3rem",
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
    maxWidth: "780px",
  },
  eyebrow: {
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
  },
  heading: {
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
    fontWeight: 600,
    letterSpacing: "-0.035em",
    lineHeight: 1.05,
    color: "var(--color-text)",
  },
  tagline: {
    fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
    color: "var(--color-text-muted)",
    lineHeight: 1.55,
    maxWidth: "640px",
  },
  body: {
    color: "var(--color-text-muted)",
    fontSize: "1.05rem",
    lineHeight: 1.7,
    maxWidth: "640px",
  },
  imageWrap: {
    overflow: "hidden",
    borderRadius: "16px",
    border: "1px solid var(--color-border)",
    aspectRatio: "16 / 9",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
});

export default function About() {
  return (
    <section {...stylex.props(styles.section)} id="about">
      <div {...stylex.props(styles.hero)}>
        <div {...stylex.props(styles.intro)}>
          <span {...stylex.props(styles.eyebrow)}>
            Software Engineer · San Francisco
          </span>
          <h1 {...stylex.props(styles.heading)}>Hi, I'm Matt Morales.</h1>
          <p {...stylex.props(styles.tagline)}>
            I build well-designed, full-stack software that's a pleasure to
            use and a pleasure to maintain.
          </p>
          <p {...stylex.props(styles.body)}>
            I studied Computer Science at UC Davis and have worked on
            full-stack engineering at Mercury Insurance and Twitter. I'm drawn
            to problems where careful engineering meets thoughtful product
            design, and I'm always looking for the next thing to learn.
          </p>
          <p {...stylex.props(styles.body)}>
            When I'm not coding, you'll find me exploring the city, working on
            side projects, or chasing whatever new idea has caught my attention
            this week.
          </p>
        </div>
        <div {...stylex.props(styles.imageWrap)}>
          <img
            {...stylex.props(styles.image)}
            src={heroImage}
            alt="The Golden Gate Bridge in San Francisco at golden hour"
          />
        </div>
      </div>
    </section>
  );
}
