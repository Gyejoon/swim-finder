'use client';

import Script from 'next/script';
import { useRef, useState } from 'react';

// 카카오맵 타입 정의
declare global {
  interface Window {
    kakao: {
      maps: {
        Map: new (container: HTMLElement, options: MapOptions) => Map;
        LatLng: new (lat: number, lng: number) => LatLng;
        load: (callback: () => void) => void;
      };
    };
  }
}

interface MapOptions {
  center: LatLng;
  level: number;
}

interface LatLng {
  getLat: () => number;
  getLng: () => number;
}

interface Map {
  setCenter: (latlng: LatLng) => void;
  setZoom: (level: number) => void;
  getCenter: () => LatLng;
  getZoom: () => number;
}

export default function MapContainer() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 지도 초기화
  const initializeMap = () => {
    console.log('initializeMap called');
    if (!window.kakao?.maps) {
      console.error('Kakao maps not loaded');
      setError('카카오맵 SDK가 로드되지 않았습니다.');
      setIsLoading(false);
      return;
    }

    const container = mapRef.current;
    if (!container) {
      console.error('Map container not found');
      setError('지도 컨테이너가 없습니다.');
      setIsLoading(false);
      return;
    }

    try {
      const options: MapOptions = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 시청 좌표
        level: 7,
      };
      new window.kakao.maps.Map(container, options);
    } catch (err) {
      console.error('Map initialization error:', err);
      setError('지도 초기화에 실패했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  // 카카오맵 SDK 로드 완료 후 처리
  const handleScriptLoad = () => {
    window.kakao.maps.load(() => {
      initializeMap();
    });
  };

  return (
    <div className="relative w-full h-full">
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`}
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
        onError={() => {
          setError('카카오맵 SDK 로드에 실패했습니다.');
          setIsLoading(false);
        }}
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 z-10">
          <div className="text-lg font-semibold">지도를 불러오는 중...</div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100 z-10">
          <div className="text-lg font-semibold text-red-600">{error}</div>
        </div>
      )}
      
      <div ref={mapRef} className="w-full h-full" />
    </div>
  );
} 