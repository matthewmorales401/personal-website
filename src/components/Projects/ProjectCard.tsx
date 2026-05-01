import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { Project } from "../../data/projects";

const styles = stylex.create({
  card: {
    display: "grid",
    gridTemplateColumns: {
      default: "minmax(0, 1.2fr) minmax(0, 1fr)",
      "@media (max-width: 1024px)": "1fr",
    },
    gap: {
      default: "3rem",
      "@media (max-width: 1024px)": "1.5rem",
    },
    alignItems: "center",
    padding: "2rem 0",
  },
  cardReverse: {
    gridTemplateColumns: {
      default: "minmax(0, 1fr) minmax(0, 1.2fr)",
      "@media (max-width: 1024px)": "1fr",
    },
  },
  imageWrap: {
    overflow: "hidden",
    borderRadius: "12px",
    border: "1px solid var(--color-border)",
    boxShadow: "var(--shadow-card)",
    transition: "transform 300ms ease, box-shadow 300ms ease",
    backgroundColor: "var(--color-surface)",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "var(--shadow-card-hover)",
    },
  },
  imageWrapReverse: {
    order: {
      default: 2,
      "@media (max-width: 1024px)": 0,
    },
  },
  image: {
    width: "100%",
    height: "auto",
    display: "block",
    aspectRatio: "16 / 10",
    objectFit: "cover",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    color: "var(--color-text)",
  },
  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  tag: {
    fontSize: "0.78rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
    backgroundColor: "var(--color-accent-soft)",
    padding: "0.3rem 0.7rem",
    borderRadius: "999px",
  },
  description: {
    color: "var(--color-text-muted)",
    fontSize: "1rem",
    lineHeight: 1.65,
  },
  links: {
    display: "flex",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "var(--color-text)",
    borderBottom: "1px solid var(--color-text)",
    paddingBottom: "2px",
    transition: "color 150ms ease, border-color 150ms ease",
    ":hover": {
      color: "var(--color-accent)",
      borderBottomColor: "var(--color-accent)",
    },
  },
});

type Props = {
  project: Project;
  reverse?: boolean;
};

export default function ProjectCard({ project, reverse = false }: Props) {
  return (
    <article
      {...stylex.props(styles.card, reverse && styles.cardReverse)}
      data-aos="fade-up"
    >
      <div {...stylex.props(styles.imageWrap, reverse && styles.imageWrapReverse)}>
        <img
          {...stylex.props(styles.image)}
          src={project.image}
          alt={project.imageAlt}
        />
      </div>
      <div {...stylex.props(styles.body)}>
        <h3 {...stylex.props(styles.title)}>{project.title}</h3>
        <ul {...stylex.props(styles.tags)} aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} {...stylex.props(styles.tag)}>
              {t}
            </li>
          ))}
        </ul>
        <p {...stylex.props(styles.description)}>{project.description}</p>
        <div {...stylex.props(styles.links)}>
          {project.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.link)}
            >
              <FontAwesomeIcon
                icon={
                  l.label.toLowerCase() === "github"
                    ? faGithub
                    : faArrowUpRightFromSquare
                }
              />
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
