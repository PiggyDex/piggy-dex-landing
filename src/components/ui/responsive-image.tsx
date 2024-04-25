import Image from "next/image";
import { type ComponentProps, type FC } from "react";

interface Props extends Omit<ComponentProps<typeof Image>, "src"> {
  pcSrc: string;
  spSrc: string;
}

export const ResponsiveImage: FC<Props> = ({ pcSrc, spSrc, ...props }) => {
  return (
    <picture>
      <source srcSet={pcSrc} media="(min-width: 768px)" />
      <Image src={spSrc} {...props} alt="" />
    </picture>
  );
};
