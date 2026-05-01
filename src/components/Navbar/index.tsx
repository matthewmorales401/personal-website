import * as stylex from "@stylexjs/stylex";
import TextLink from "../TextLink";
import IconLink from "../IconLink";
import ThemeToggle from "../ThemeToggle";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const styles = stylex.create({
  nav: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "var(--color-nav-bg)",
    backdropFilter: "saturate(160%) blur(12px)",
    WebkitBackdropFilter: "saturate(160%) blur(12px)",
    borderBottom: "1px solid var(--color-border)",
  },
  inner: {
    maxWidth: "var(--max-width)",
    margin: "0 auto",
    paddingLeft: "var(--space-page)",
    paddingRight: "var(--space-page)",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  brand: {
    fontSize: "1.05rem",
    fontWeight: 600,
    letterSpacing: "-0.01em",
    color: "var(--color-text)",
  },
  desktopLinks: {
    display: {
      default: "flex",
      "@media (max-width: 700px)": "none",
    },
    alignItems: "center",
    gap: "1.5rem",
  },
  iconRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    paddingLeft: "0.75rem",
    borderLeft: "1px solid var(--color-border)",
  },
  hamburger: {
    display: {
      default: "none",
      "@media (max-width: 700px)": "inline-flex",
    },
    background: "transparent",
    border: "none",
    padding: "0.5rem",
    cursor: "pointer",
    color: "var(--color-text)",
    alignItems: "center",
    justifyContent: "center",
  },
  mobilePanel: {
    display: {
      default: "none",
      "@media (max-width: 700px)": "flex",
    },
    flexDirection: "column",
    gap: "1rem",
    paddingTop: "1rem",
    paddingBottom: "1.5rem",
    paddingLeft: "var(--space-page)",
    paddingRight: "var(--space-page)",
    borderTop: "1px solid var(--color-border)",
    backgroundColor: "var(--color-surface)",
  },
  mobileIcons: {
    display: "flex",
    gap: "1rem",
    paddingTop: "0.75rem",
    borderTop: "1px solid var(--color-border)",
  },
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav {...stylex.props(styles.nav)} aria-label="Primary">
      <div {...stylex.props(styles.inner)}>
        <a
          href="#about"
          {...stylex.props(styles.brand)}
          aria-label="Matt Morales, home"
        >
          Matt Morales
        </a>

        <div {...stylex.props(styles.desktopLinks)}>
          <TextLink href="#about" title="About" />
          <TextLink href="#experience" title="Experience" />
          <TextLink href="#projects" title="Projects" />
          <TextLink href="/matthew_morales_resume.pdf" title="Resume" />
          <span {...stylex.props(styles.iconRow)}>
            <IconLink
              href="https://github.com/matthewmorales401"
              icon={faGithub}
              label="GitHub"
            />
            <IconLink
              href="https://www.linkedin.com/in/matt-morales-6a7914173/"
              icon={faLinkedin}
              label="LinkedIn"
            />
            <IconLink
              href="mailto:matthewmoralestech@gmail.com"
              icon={faEnvelope}
              label="Email"
            />
            <ThemeToggle />
          </span>
        </div>

        <button
          type="button"
          {...stylex.props(styles.hamburger)}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} size="lg" />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" {...stylex.props(styles.mobilePanel)}>
          <TextLink href="#about" title="About" onClick={() => setOpen(false)} />
          <TextLink
            href="#experience"
            title="Experience"
            onClick={() => setOpen(false)}
          />
          <TextLink
            href="#projects"
            title="Projects"
            onClick={() => setOpen(false)}
          />
          <TextLink
            href="/matthew_morales_resume.pdf"
            title="Resume"
            onClick={() => setOpen(false)}
          />
          <div {...stylex.props(styles.mobileIcons)}>
            <IconLink
              href="https://github.com/matthewmorales401"
              icon={faGithub}
              label="GitHub"
            />
            <IconLink
              href="https://www.linkedin.com/in/matt-morales-6a7914173/"
              icon={faLinkedin}
              label="LinkedIn"
            />
            <IconLink
              href="mailto:matthewmoralestech@gmail.com"
              icon={faEnvelope}
              label="Email"
            />
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}
