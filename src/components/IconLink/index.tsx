import * as stylex from "@stylexjs/stylex";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = stylex.create({
  link: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "2.25rem",
    height: "2.25rem",
    color: "var(--color-text-muted)",
    borderRadius: "8px",
    transition: "color 150ms ease, background-color 150ms ease",
    ":hover": {
      color: "var(--color-accent)",
      backgroundColor: "var(--color-accent-soft)",
    },
  },
});

type Props = {
  href: string;
  icon: IconDefinition;
  label: string;
};

export default function IconLink({ href, icon, label }: Props) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...stylex.props(styles.link)}
    >
      <FontAwesomeIcon icon={icon} size="lg" />
    </a>
  );
}
