import clsx from "clsx";
import "./style.scss";
import {
  IconAlertCircle,
  IconInfoCircle,
  IconStarFilled,
} from "@tabler/icons-react";

type variable = "secondary" | "info" | "warning" | "line";

const iconMap = {
  secondary: IconAlertCircle,
  info: IconInfoCircle,
  warning: IconStarFilled,
  
};

interface ChipProps {
  variable?: variable;
  children: React.ReactNode;
  className?: string;
  isRounded?: boolean;
  hasIcon?: boolean;
}

function Chip({
  variable = "secondary",
  className,
  children,
  isRounded,
  hasIcon,
}: ChipProps) {
  const Icon = iconMap[variable as keyof typeof iconMap];
  return (
    <div
      className={clsx(
        "chip",
        `chip-${variable}`,
        isRounded && "chip-rounded",
        className,
      )}
    >
      {hasIcon && variable !== "line" && Icon && <Icon size={12.5} />}

      <p>{children}</p>
    </div>
  );
}

export default Chip;
