import * as stylex from "@stylexjs/stylex";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const styles = stylex.create({
  section: {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    paddingLeft: "var(--space-page)",
    paddingRight: "var(--space-page)",
    paddingTop: "var(--space-section)",
    paddingBottom: "var(--space-section)",
  },
  header: {
    display: "flex",
    alignItems: "baseline",
    gap: "1rem",
    marginBottom: "3rem",
    flexDirection: {
      default: "row",
      "@media (max-width: 700px)": "column",
    },
  },
  eyebrow: {
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
  },
  title: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 600,
    letterSpacing: "-0.03em",
    color: "var(--color-text)",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
});

export default function Projects() {
  return (
    <section {...stylex.props(styles.section)} id="projects">
      <header {...stylex.props(styles.header)}>
        <span {...stylex.props(styles.eyebrow)}>Selected Work</span>
        <h2 {...stylex.props(styles.title)}>Projects</h2>
      </header>
      <div {...stylex.props(styles.list)}>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
