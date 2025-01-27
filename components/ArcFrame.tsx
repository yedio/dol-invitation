import { cls } from "@libs/client/Utility";
import { CommonImage } from "./image/CommonImage";

interface ArcFrameProps {
  src: string;
  width?: number;
  height?: number;
  providedStyle?: string;
}

export const ArcFrame = ({
  src,
  width,
  height,
  providedStyle,
}: ArcFrameProps) => {
  return (
    <div
      className={cls(
        "relative overflow-hidden object-contain rounded-t-full",
        providedStyle
      )}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
      }}
    >
      <CommonImage src={src} />
    </div>
  );
};
