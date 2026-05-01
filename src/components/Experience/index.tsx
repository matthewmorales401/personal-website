import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faUber } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Role = {
  company: string;
  role: string;
  href: string;
  icon: IconDefinition;
};

const roles: Role[] = [
  {
    company: "Twitter",
    role: "Software Engineer Intern",
    href: "https://www.x.com/",
    icon: faTwitter,
  },
  {
    company: "Uber",
    role: "Career Prep Fellow — Software Engineering",
    href: "https://www.uber.com/",
    icon: faUber,
  },
];

const styles = stylex.create({
  section: {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    paddingLeft: "var(--space-page)",
    paddingRight: "var(--space-page)",
    paddingTop: "var(--space-section)",
    paddingBottom: "var(--space-section)",
    borderTop: "1px solid var(--color-border)",
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
    gap: "1.5rem",
  },
  row: {
    display: "grid",
    gridTemplateColumns: {
      default: "auto 1fr auto",
      "@media (max-width: 700px)": "auto 1fr",
    },
    gap: "1.5rem",
    alignItems: "center",
    padding: "1.25rem 0",
    borderBottom: "1px solid var(--color-border)",
    transition: "transform 200ms ease",
    color: "var(--color-text)",
    ":hover": {
      transform: "translateX(4px)",
    },
  },
  iconWrap: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "8px",
    backgroundColor: "var(--color-accent-soft)",
    color: "var(--color-accent)",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    gap: "0.15rem",
  },
  company: {
    fontSize: "1.15rem",
    fontWeight: 600,
    color: "var(--color-text)",
    letterSpacing: "-0.01em",
  },
  role: {
    fontSize: "0.95rem",
    color: "var(--color-text-muted)",
  },
  arrow: {
    color: "var(--color-text-subtle)",
    display: {
      default: "inline-block",
      "@media (max-width: 700px)": "none",
    },
  },
});

export default function Experience() {
  return (
    <section {...stylex.props(styles.section)} id="experience">
      <header {...stylex.props(styles.header)}>
        <span {...stylex.props(styles.eyebrow)}>Where I've worked</span>
        <h2 {...stylex.props(styles.title)}>Experience</h2>
      </header>
      <div {...stylex.props(styles.list)}>
        {roles.map((r) => (
          <a
            key={r.company}
            href={r.href}
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(styles.row)}
          >
            <span {...stylex.props(styles.iconWrap)} aria-hidden="true">
              <FontAwesomeIcon icon={r.icon} size="lg" />
            </span>
            <div {...stylex.props(styles.body)}>
              <span {...stylex.props(styles.company)}>{r.company}</span>
              <span {...stylex.props(styles.role)}>{r.role}</span>
            </div>
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              {...stylex.props(styles.arrow)}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
