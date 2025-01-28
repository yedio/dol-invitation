"use client";

import { useState } from "react";
import { cls } from "@libs/client/Utility";
import { CommonImage } from "./image/CommonImage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface GalleryProps {
  images: string[];
  providedStyle?: string;
}

export const Gallery = ({ images, providedStyle }: GalleryProps) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openFullScreen = (index: number) => {
    setCurrentIndex(index);
    setIsFullScreen(true);
  };

  const settings = {
    initialSlide: currentIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    afterChange: (index: number) => setCurrentIndex(index),
  };

  return (
    <>
      <div className={cls("grid grid-cols-3 gap-2", providedStyle)}>
        {images.map((image, index) => (
          <div
            key={index}
            className="aspect-[2/3] overflow-hidden cursor-pointer"
            onClick={() => openFullScreen(index)}
          >
            <CommonImage src={image} />
          </div>
        ))}
      </div>
      {isFullScreen && (
        <div className="fixed inset-0 z-20 bg-white flex flex-col items-center justify-center max-w-[440px] mx-auto h-full">
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsFullScreen(false)}
          >
            <CommonImage src="/img/icons/close.svg" width={20} />
          </button>
          {/* Slide Show */}
          <div className="w-full max-w-[440px]">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center h-[80%]"
                >
                  <CommonImage
                    src={image}
                    providedStyle="max-h-full object-contain"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      )}
    </>
  );
};
