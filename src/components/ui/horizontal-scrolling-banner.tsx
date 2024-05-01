"use client";

import Image from "next/image";
import { type FC } from "react";

import { cn } from "@/lib";

type imageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  href?: string;
};

type HorizontalScrollBannerProps = {
  className?: string;
  images: imageProps[];
  scrollDirection?: "left" | "right";
};

const ImageMap = ({ images }: { images: imageProps[] }) => {
  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="cursor-pointer object-cover"
          onClick={() => {
            if (image.href) {
              window.open(image.href, "_blank");
            }
          }}
        />
      ))}
    </>
  );
};

export const HorizontalScrollingBanner: FC<HorizontalScrollBannerProps> = ({
  className,
  images,
  scrollDirection = "left",
}) => {
  const animate =
    scrollDirection === "left"
      ? "animate-[horizontalScrollLeft_10s_linear_infinite]"
      : "animate-[horizontalScrollRight_10s_linear_infinite]";

  return (
    <div
      className={cn(
        "flex w-[800px] overflow-x-hidden group lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px]",
        className,
      )}
    >
      <div
        className={cn(
          "will-change-transform flex flex-row group-hover:animate-pause",
          animate,
        )}
      >
        <ImageMap images={images} />
      </div>
    </div>
  );
};
