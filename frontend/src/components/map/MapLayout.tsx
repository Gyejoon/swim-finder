'use client';

import { useEffect, useState } from 'react';
import MapContainer from './MapContainer';
import useMapStore from '@/store/mapStore';
import FilterPanel from './FilterPanel';
import PoolDetail from './PoolDetail';
import PoolList from './PoolList';
import { mockPools } from '@/data/mockData';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function MapLayout() {
  const { selectedPool, setPools } = useMapStore();
  const [isListOpen, setIsListOpen] = useState(true);

  useEffect(() => {
    setPools(mockPools);
  }, [setPools]);

  return (
    <div className="relative w-full h-[calc(100vh-64px)]">
      {/* 지도 영역 */}
      <div className="absolute inset-0">
        <MapContainer />
      </div>

      {/* 필터 패널 */}
      <div className="absolute top-4 left-4 z-10">
        <FilterPanel />
      </div>

      {/* 수영장 리스트 (모바일: 바텀시트, 데스크탑: 사이드패널) */}
      <div className="absolute bottom-0 left-0 right-0 md:right-0 md:left-auto md:w-96 md:top-0 md:bottom-0 z-10">
        {/* 모바일에서만 보이는 토글 버튼 */}
        <div className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-md">
          <button
            onClick={() => setIsListOpen(!isListOpen)}
            className="w-full flex items-center justify-center p-2"
          >
            {isListOpen ? (
              <ChevronDownIcon className="w-6 h-6" />
            ) : (
              <ChevronUpIcon className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className={`md:block ${isListOpen ? 'block' : 'hidden'} h-full`}>
          <PoolList />
        </div>
      </div>

      {/* 수영장 상세 정보 (모바일: 바텀시트, 데스크탑: 사이드패널) */}
      {selectedPool && (
        <div className="absolute bottom-0 left-0 right-0 md:right-0 md:left-auto md:w-96 md:top-0 md:bottom-0 z-20">
          <PoolDetail pool={selectedPool} />
        </div>
      )}
    </div>
  );
} 