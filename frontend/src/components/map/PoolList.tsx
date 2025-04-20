'use client';

import useMapStore from '@/store/mapStore';
import { Pool } from '@/types/pool';
import { useCallback } from 'react';

export default function PoolList() {
  const { pools, selectedPool, setSelectedPool } = useMapStore();

  const handlePoolClick = useCallback((pool: Pool) => {
    setSelectedPool(pool);
  }, [setSelectedPool]);

  return (
    <div className="h-full bg-white md:rounded-l-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">수영장 목록</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100%-56px)]">
        {pools.map((pool) => (
          <div
            key={pool.id}
            className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
              selectedPool?.id === pool.id ? 'bg-blue-50' : ''
            }`}
            onClick={() => handlePoolClick(pool)}
          >
            <h3 className="font-medium">{pool.name}</h3>
            <p className="text-sm text-gray-600">{pool.address}</p>
            <div className="flex gap-2 mt-2">
              {pool.isPublic && (
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  공공
                </span>
              )}
              {pool.hasLesson && (
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  수업
                </span>
              )}
              {pool.isNightOpen && (
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  야간
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 