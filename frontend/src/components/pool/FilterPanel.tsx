'use client';

import { useState } from 'react';

interface FilterOptions {
  isPublic: boolean | null;
  hasWeekendFreeSwim: boolean | null;
  hasLesson: boolean | null;
  priceRange: 'low' | 'mid' | 'high' | null;
}

export default function FilterPanel() {
  const [filters, setFilters] = useState<FilterOptions>({
    isPublic: null,
    hasWeekendFreeSwim: null,
    hasLesson: null,
    priceRange: null,
  });

  const handleFilterChange = (key: keyof FilterOptions, value: boolean | string | null) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">필터</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            수영장 유형
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                checked={filters.isPublic === true}
                onChange={() => handleFilterChange('isPublic', true)}
              />
              <span className="ml-2">공공</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio"
                checked={filters.isPublic === false}
                onChange={() => handleFilterChange('isPublic', false)}
              />
              <span className="ml-2">사설</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            주말 자유수영
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={filters.hasWeekendFreeSwim === true}
              onChange={(e) => handleFilterChange('hasWeekendFreeSwim', e.target.checked)}
            />
            <span className="ml-2">가능</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            수업 유무
          </label>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={filters.hasLesson === true}
              onChange={(e) => handleFilterChange('hasLesson', e.target.checked)}
            />
            <span className="ml-2">수업 있음</span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            가격대
          </label>
          <select
            className="form-select block w-full"
            value={filters.priceRange || ''}
            onChange={(e) => handleFilterChange('priceRange', e.target.value || null)}
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