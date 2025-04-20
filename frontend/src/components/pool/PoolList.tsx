'use client';

import { useState } from 'react';
import { Pool } from '@/types/pool';

// 임시 데이터
const mockPools: Pool[] = [
  {
    id: '1',
    name: '서울시립 수영장',
    address: '서울시 중구 세종대로 110',
    district: '중구',
    lat: 37.5665,
    lng: 126.9780,
    isPublic: true,
    priceRange: 'low',
    hasLesson: true,
    isNightOpen: true,
    hasWeekendFreeSwim: true,
    schedule: {
      freeSwim: [
        { day: '월', times: ['06:00~08:00', '13:00~15:00'] },
        { day: '화', times: ['06:00~08:00', '13:00~15:00'] },
      ],
      lesson: [
        { day: '월', times: ['09:00~12:00'] },
        { day: '화', times: ['09:00~12:00'] },
      ],
    },
    contact: '02-1234-5678',
    imageUrl: [],
    status: 'active',
    createdAt: '2024-01-01',
  },
];

export default function PoolList() {
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);

  return (
    <div className="bg-white h-full overflow-y-auto">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-4">수영장 목록</h3>
        <div className="space-y-4">
          {mockPools.map((pool) => (
            <div
              key={pool.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedPool?.id === pool.id ? 'border-blue-500' : 'border-gray-200'
              }`}
              onClick={() => setSelectedPool(pool)}
            >
              <h4 className="font-medium">{pool.name}</h4>
              <p className="text-sm text-gray-600">{pool.address}</p>
              <div className="mt-2 flex items-center space-x-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {pool.isPublic ? '공공' : '사설'}
                </span>
                {pool.hasWeekendFreeSwim && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    주말 자유수영
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 