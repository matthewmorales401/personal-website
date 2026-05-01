import * as stylex from "@stylexjs/stylex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const styles = stylex.create({
  section: {
    borderTop: "1px solid var(--color-border)",
    paddingTop: "var(--space-section)",
    paddingBottom: "4rem",
  },
  inner: {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    paddingLeft: "var(--space-page)",
    paddingRight: "var(--space-page)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "0.85rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--color-accent)",
  },
  heading: {
    fontSize: "clamp(2rem, 5vw, 3rem)",
    fontWeight: 600,
    letterSpacing: "-0.03em",
    color: "var(--color-text)",
  },
  body: {
    fontSize: "1.05rem",
    color: "var(--color-text-muted)",
    lineHeight: 1.65,
    maxWidth: "560px",
  },
  cta: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    marginTop: "0.5rem",
    padding: "0.85rem 1.5rem",
    backgroundColor: "var(--color-text)",
    color: "var(--color-surface)",
    fontWeight: 500,
    borderRadius: "999px",
    transition: "background-color 150ms ease, transform 150ms ease",
    ":hover": {
      backgroundColor: "var(--color-accent)",
      transform: "translateY(-1px)",
      color: "var(--color-surface)",
    },
  },
  socials: {
    display: "flex",
    gap: "1.5rem",
    marginTop: "0.5rem",
    color: "var(--color-text-muted)",
  },
  socialLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.4rem",
    fontSize: "0.95rem",
    color: "var(--color-text-muted)",
    transition: "color 150ms ease",
    ":hover": {
      color: "var(--color-accent)",
    },
  },
  footer: {
    marginTop: "3.5rem",
    paddingTop: "2rem",
    borderTop: "1px solid var(--color-border)",
    fontSize: "0.85rem",
    color: "var(--color-text-subtle)",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "1rem",
    flexDirection: {
      default: "row",
      "@media (max-width: 700px)": "column",
    },
    width: "100%",
    maxWidth: "560px",
  },
});

export default function Contact() {
  return (
    <section {...stylex.props(styles.section)} id="contact">
      <div {...stylex.props(styles.inner)}>
        <span {...stylex.props(styles.eyebrow)}>Get in touch</span>
        <h2 {...stylex.props(styles.heading)}>Let's build something.</h2>
        <p {...stylex.props(styles.body)}>
          I'm always open to interesting conversations, whether it's a project
          you're working on, a role you think I'd be a fit for, or just to say
          hi.
        </p>
        <a
          href="mailto:matthewmoralestech@gmail.com"
          {...stylex.props(styles.cta)}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          matthewmoralestech@gmail.com
        </a>
        <div {...stylex.props(styles.socials)}>
          <a
            href="https://github.com/matthewmorales401"
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(styles.socialLink)}
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
          <a
            href="https://www.linkedin.com/in/matt-morales-6a7914173/"
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(styles.socialLink)}
          >
            <FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
          </a>
        </div>
        <div {...stylex.props(styles.footer)}>
          <span>© {new Date().getFullYear()} Matt Morales</span>
          <a
            href="https://github.com/matthewmorales401/personal-website"
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(styles.socialLink)}
          >
            Source on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
