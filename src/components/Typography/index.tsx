import clsx from "clsx";
import "./style.scss";

type Variable = "title" | "caption" | "body";

interface TypographyProps {
  variable?: Variable;
  children: React.ReactNode;
  className?: string;
  isBase?: boolean;
}

export const Typography = ({
  variable = "body",
  className,
  children,
  isBase,
}: TypographyProps) => {
  switch (variable) {
    case "title":
      return <h2 className={clsx("text-title", className)}>{children}</h2>;

    case "caption":
      return <p className={clsx("text-caption", className)}>{children}</p>;

    case "body":
    default:
      return (
        <p className={clsx(isBase ? "text-body-base" : "text-body", className)}>
          {children}
        </p>
      );
  }
};
