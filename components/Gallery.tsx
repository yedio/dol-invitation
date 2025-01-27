import { cls } from "@libs/client/Utility";
import { CommonImage } from "./image/CommonImage";

interface GalleryProps {
  images: string[];
  providedStyle?: string;
}

export const Gallery = ({ images, providedStyle }: GalleryProps) => {
  return (
    <div className={cls("grid grid-cols-3 gap-4", providedStyle)}>
      {images.map((image, index) => (
        <div key={index} className="aspect-[13/20] overflow-hidden">
          <CommonImage src={image} />
        </div>
      ))}
    </div>
  );
};
