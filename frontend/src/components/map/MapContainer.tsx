'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function MapContainer() {
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 시청 좌표
        level: 7,
      };
      const kakaoMap = new window.kakao.maps.Map(container, options);
      setMap(kakaoMap);
    }
  }, []);

  return (
    <>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        strategy="beforeInteractive"
        onLoad={() => {
          window.kakao.maps.load(() => {
            // 지도 로드 완료 후 처리
          });
        }}
      />
      <div id="map" className="w-full h-full" />
    </>
  );
} 