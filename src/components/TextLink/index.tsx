import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  link: {
    fontSize: "0.95rem",
    fontWeight: 500,
    color: "var(--color-text-muted)",
    transition: "color 150ms ease",
    ":hover": {
      color: "var(--color-accent)",
    },
  },
});

type Props = {
  href: string;
  title: string;
  onClick?: () => void;
};

export default function TextLink({ href, title, onClick }: Props) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...stylex.props(styles.link)}
    >
      {title}
    </a>
  );
}
