import { type FC } from "react";

import { cn } from "@/lib";
import { type Socials } from "@/types";

import { SocialIcon } from "./socials-icons";

interface Props {
  className?: string;
  SocialName: Socials;
  link?: string;
  iconSize?: number;
}

export const SocialButton: FC<Props> = ({
  className,
  link,
  SocialName,
  iconSize,
}) => {
  return (
    <a
      title="Social"
      href={link}
      className={cn(
        "flex items-center justify-center w-16 h-12 px-4 py-[6px] rounded-xl bg-white/15",
        className,
      )}
    >
      <SocialIcon SocialName={SocialName} width={iconSize} height={iconSize} />
    </a>
  );
};
