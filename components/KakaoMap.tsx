"use client";
import { cls } from "@libs/client/Utility";
import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  address: string; //도로명 주소
  providedStyle?: string;
}
export default function KakaoMap({ address, providedStyle }: KakaoMapProps) {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(0, 0), // 지도의 중심좌표 (경도 & 위도)
          level: 3, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소로 좌표 검색
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(address, function (result: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            map.setCenter(coords);

            // 마커 표시
            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });
            marker.setMap(map);
          }
        });

        // 추가적인 옵션 기능 (줌 & 지도타입)
      });
    };

    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return <div id="map" className={cls("w-full h-[250px] bg-grey-40")} />;
}
