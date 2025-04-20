'use client';

import { useEffect, useRef } from 'react';
import { Pool } from '@/types/pool';

interface MarkerManagerProps {
  pools: Pool[];
  onMarkerClick: (pool: Pool) => void;
  map: kakao.maps.Map | null;
}

const MarkerManager = ({ pools, onMarkerClick, map }: MarkerManagerProps) => {
  const markersRef = useRef<kakao.maps.Marker[]>([]);
  
  useEffect(() => {
    if (!map) return;
    
    // 기존 마커 제거
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];
    
    // 새로운 마커 생성
    pools.forEach(pool => {
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(pool.lat, pool.lng),
        map: map,
      });
      
      window.kakao.maps.event.addListener(marker, 'click', () => onMarkerClick(pool));
      markersRef.current.push(marker);
    });
    
    // cleanup
    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
    };
  }, [pools, map, onMarkerClick]);
  
  return null;
};

export default MarkerManager; 