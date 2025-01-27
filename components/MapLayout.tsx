"use client";
import { cls } from "@libs/client/Utility";
import { useEffect } from "react";
import KakaoMap from "./KakaoMap";
import { CommonImage } from "./image/CommonImage";

interface MapLayoutProps {
  address: string; //도로명 주소
  mapAddress: { kakao: string; naver: string; tmap: string };
}
export default function MapLayout({ address, mapAddress }: MapLayoutProps) {
  return (
    <div className="w-full flex flex-col">
      <KakaoMap address={address} />
      <div className="w-full flex justify-center bg-gray-100 items-center divide-x ">
        <div
          className="w-1/3 p-2.5 flex space-x-1.5 items-center justify-center cursor-pointer"
          onClick={() => window.open(mapAddress.naver, "_blank")}
        >
          <CommonImage src={"/img/icons/logos/simple/naver.svg"} />
          <div className="text-14 text-gray-600">네이버지도</div>
        </div>
        <div
          className="w-1/3 p-2.5 flex space-x-1.5 items-center justify-center cursor-pointer"
          onClick={() => window.open(mapAddress.kakao, "_blank")}
        >
          <CommonImage src={"/img/icons/logos/simple/kakao.svg"} />
          <div className="text-14 text-gray-600">카카오맵</div>
        </div>
        <div
          className="w-1/3 p-2.5 flex space-x-1.5 items-center justify-center cursor-pointer"
          onClick={() => window.open(mapAddress.tmap, "_blank")}
        >
          <CommonImage src={"/img/icons/logos/simple/tmap.svg"} />
          <div className="text-14 text-gray-600">티맵</div>
        </div>
      </div>
    </div>
  );
}
