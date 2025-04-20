'use client';

import { Pool } from '@/types/pool';
import useMapStore from '@/store/mapStore';

interface PoolDetailProps {
  pool: Pool;
}

export default function PoolDetail({ pool }: PoolDetailProps) {
  const { setSelectedPool } = useMapStore();

  return (
    <div className="bg-white h-2/3 md:h-full overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-xl font-semibold">{pool.name}</h2>
          <button
            onClick={() => setSelectedPool(null)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          {/* 기본 정보 */}
          <div>
            <h3 className="font-medium mb-2">기본 정보</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">{pool.address}</p>
              <p className="text-sm text-gray-600">{pool.contact}</p>
              <div className="flex items-center space-x-2">
                {pool.isPublic && (
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                    공공
                  </span>
                )}
                {pool.hasWeekendFreeSwim && (
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">
                    주말 자유수영
                  </span>
                )}
                {pool.hasLesson && (
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded">
                    수업
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* 시간표 */}
          <div>
            <h3 className="font-medium mb-2">운영 시간</h3>
            <div className="space-y-2">
              {pool.schedule.freeSwim.map((daySchedule, index) => (
                <div key={index} className="flex items-center">
                  <span className="w-8 text-sm font-medium">{daySchedule.day}</span>
                  <div className="flex-1">
                    {daySchedule.times.map((time, i) => (
                      <span
                        key={i}
                        className="inline-block px-2 py-1 mr-2 mb-1 text-xs bg-gray-100 rounded"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 수업 정보 */}
          {pool.hasLesson && pool.schedule.lesson && (
            <div>
              <h3 className="font-medium mb-2">수업 시간</h3>
              <div className="space-y-2">
                {pool.schedule.lesson.map((daySchedule, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-8 text-sm font-medium">{daySchedule.day}</span>
                    <div className="flex-1">
                      {daySchedule.times.map((time, i) => (
                        <span
                          key={i}
                          className="inline-block px-2 py-1 mr-2 mb-1 text-xs bg-purple-100 rounded"
                        >
                          {time}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 비고 */}
          {pool.schedule.note && (
            <div>
              <h3 className="font-medium mb-2">비고</h3>
              <p className="text-sm text-gray-600">{pool.schedule.note}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 