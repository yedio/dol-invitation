/* eslint-disable @next/next/no-img-element */
import { cls } from "@libs/client/Utility";
import React, { CSSProperties } from "react";
interface CommonImageProps {
  src?: string;
  alt?: string;
  style?: CSSProperties;
  providedStyle?: string;
  width?: number;
  height?: number;
  onImageClicked?: (e: React.MouseEvent<HTMLImageElement>) => void;
}
// eslint-disable-next-line react/display-name
export const CommonImage = React.memo(
  ({
    src,
    alt,
    style,
    providedStyle,
    width,
    height,
    onImageClicked,
  }: CommonImageProps) => {
    if (!src) return <></>;

    return (
      <img
        className={cls(
          "shrink-0 object-contain object-center",
          onImageClicked ? "cursor-pointer" : "",
          providedStyle
        )}
        src={src}
        style={{
          width,
          height,
          maxWidth: width,
          maxHeight: height,
          ...style,
        }}
        alt={alt ?? "image"}
        decoding="async"
        onClick={onImageClicked}
      />
    );
  }
);
