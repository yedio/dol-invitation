"use client";
import { ArcFrame } from "@components/ArcFrame";
import { MarqueeContainer } from "@components/effects/MarqueeContainer";
import { info } from "@libs/client/InfoData";
import { useEffect, useState } from "react";

export default function CoverLayout() {
  const { image, baby, date, time, location } = info;
  const [screenHeight, setScreenHeight] = useState("100vh");
  const [contentPosition, setContentPosition] = useState("");

  useEffect(() => {
    // 초기 화면 높이 설정 및 콘텐츠 위치 계산
    const updateDimensions = () => {
      const height = window.innerHeight;
      setScreenHeight(`${height}px`);

      // 콘텐츠 높이를 대략적으로 계산 (마퀴 + 메인 이미지 + 텍스트)
      const estimatedContentHeight = 600; // 마퀴(50px) + 이미지(340px) + 텍스트(150px) + 여백

      // 화면 높이가 콘텐츠보다 충분히 크면 중앙 정렬, 아니면 상단 정렬
      if (height > estimatedContentHeight + 100) {
        setContentPosition("justify-center");
      } else {
        setContentPosition("justify-start");
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  return (
    <div
      className={`relative w-full bg-cover-color flex flex-col items-center ${contentPosition}`}
      style={{ minHeight: screenHeight }}
    >
      {/* Header - Marquee Effect */}
      <MarqueeContainer text="🎉 yeonz's 1st birthday 🎉" />

      <div
        className={`flex flex-col items-center w-full py-8 px-4 ${
          contentPosition === "justify-center"
            ? "flex-grow flex justify-center"
            : ""
        }`}
      >
        {/* Main Image Section */}
        <div className="relative w-full flex flex-col items-center">
          <div className="text-center text-main-color text-[50px] sm:text-[60px] font-serif absolute top-0 leading-[70px] sm:leading-[80px] left-1/2 transform -translate-x-1/2 -translate-y-4 whitespace-nowrap z-10 font-weight-700">
            happy
            <br />
            birthday
            <span className="absolute top-0 right-0 text-2xl">✨</span>
            <span className="absolute top-1/2 -left-8 text-2xl">✨</span>
          </div>
          <ArcFrame
            src={image.cover}
            width={260}
            height={340}
            providedStyle="mt-[80px]"
          />
        </div>

        {/* Footer Info Section */}
        <div className="flex flex-col items-center text-main-color space-y-1 mt-4">
          <p className="text-16 sm:text-18 font-weight-600">
            <span className="mx-2">✨</span>
            {baby.name}
            <span className="mx-2">✨</span>
          </p>
          <p className="text-18 sm:text-20 font-weight-500">
            {date.split(" ")?.[0]} | {time}
          </p>
          <p className="text-14 sm:text-16 font-weight-500">{location}</p>
        </div>
      </div>
    </div>
  );
}
