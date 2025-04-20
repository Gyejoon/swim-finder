import { create } from 'zustand';
import { Pool } from '@/types/pool';

interface MapState {
  pools: Pool[];
  filteredPools: Pool[];
  selectedPool: Pool | null;
  filters: {
    isPublic: boolean | null;
    hasWeekendFreeSwim: boolean;
    hasLesson: boolean;
    priceRange: Pool['priceRange'] | null;
  };
  setPools: (pools: Pool[]) => void;
  setSelectedPool: (pool: Pool | null) => void;
  setFilters: (filters: Partial<MapState['filters']>) => void;
}

const useMapStore = create<MapState>((set, get) => ({
  pools: [],
  filteredPools: [],
  selectedPool: null,
  filters: {
    isPublic: null,
    hasWeekendFreeSwim: false,
    hasLesson: false,
    priceRange: null,
  },
  setPools: (pools) => {
    set({ pools, filteredPools: pools });
  },
  setSelectedPool: (pool) => set({ selectedPool: pool }),
  setFilters: (newFilters) => {
    const currentFilters = get().filters;
    const updatedFilters = { ...currentFilters, ...newFilters };
    const pools = get().pools;

    const filteredPools = pools.filter((pool) => {
      if (updatedFilters.isPublic !== null && pool.isPublic !== updatedFilters.isPublic)
        return false;
      if (updatedFilters.hasWeekendFreeSwim && !pool.hasWeekendFreeSwim)
        return false;
      if (updatedFilters.hasLesson && !pool.hasLesson) return false;
      if (updatedFilters.priceRange && pool.priceRange !== updatedFilters.priceRange)
        return false;
      return true;
    });

    set({ filters: updatedFilters, filteredPools });
  },
}));

export default useMapStore; 