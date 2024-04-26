import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import Image from "next/image";
import { type FC } from "react";

import { cn } from "@/lib";
import { Socials } from "@/types";

type SocialIconProps = {
  SocialName: Socials;
  className?: string;
  width?: number;
  height?: number;
};

export const SocialIcon: FC<SocialIconProps> = ({
  SocialName,
  className,
  width,
  height,
}) => {
  switch (SocialName) {
    case Socials.X:
      return <XIcon className={cn(`w-[${width}] h-[${height}]`, className)} />;
    case Socials.Telegram:
      return (
        <TelegramIcon className={cn(`w-[${width}] h-[${height}]`, className)} />
      );
    case Socials.Discord:
      return (
        <Image
          src="socials/discord.svg"
          alt="Discord"
          className={className}
          width={width}
          height={height}
        />
      );
    default:
      return <div>Null</div>;
  }
};
