export interface NavButtonProps {
  onClick: () => void;
  direction: "down" | "up";
}

export interface CalculatorCardProps {
  href: string;
  gradient: string;
  textColor: string;
  shadowColor: string;
  icon: string;
  title: string;
  iconSize?: number;
  isGif?: boolean;
}

export interface DiscordLinkProps {
  href: string;
  name: string;
}
