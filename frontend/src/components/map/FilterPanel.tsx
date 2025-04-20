'use client';

import { Pool } from '@/types/pool';
import useMapStore from '@/store/mapStore';

export default function FilterPanel() {
  const { filters, setFilters } = useMapStore();

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-64">
      <h2 className="text-lg font-semibold mb-4">필터</h2>
      
      <div className="space-y-4">
        {/* 공공/사설 필터 */}
        <div>
          <label className="block text-sm font-medium mb-2">수영장 유형</label>
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded ${
                filters.isPublic === true
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => setFilters({ ...filters, isPublic: true })}
            >
              공공
            </button>
            <button
              className={`px-3 py-1 rounded ${
                filters.isPublic === false
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => setFilters({ ...filters, isPublic: false })}
            >
              사설
            </button>
            <button
              className={`px-3 py-1 rounded ${
                filters.isPublic === null
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => setFilters({ ...filters, isPublic: null })}
            >
              전체
            </button>
          </div>
        </div>

        {/* 주말 자유수영 필터 */}
        <div>
          <label className="block text-sm font-medium mb-2">주말 자유수영</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={filters.hasWeekendFreeSwim}
              onChange={(e) =>
                setFilters({ ...filters, hasWeekendFreeSwim: e.target.checked })
              }
              className="mr-2"
            />
            <span className="text-sm">주말 자유수영 가능</span>
          </div>
        </div>

        {/* 수업 유무 필터 */}
        <div>
          <label className="block text-sm font-medium mb-2">수업</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={filters.hasLesson}
              onChange={(e) =>
                setFilters({ ...filters, hasLesson: e.target.checked })
              }
              className="mr-2"
            />
            <span className="text-sm">수업 있음</span>
          </div>
        </div>

        {/* 가격대 필터 */}
        <div>
          <label className="block text-sm font-medium mb-2">가격대</label>
          <select
            value={filters.priceRange || ''}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: e.target.value as Pool['priceRange'] | null,
              })
            }
            className="w-full p-2 border rounded"
          >
            <option value="">전체</option>
            <option value="low">저가</option>
            <option value="mid">중가</option>
            <option value="high">고가</option>
          </select>
        </div>
      </div>
    </div>
  );
} 