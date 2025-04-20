export type Day = '월' | '화' | '수' | '목' | '금' | '토' | '일';
export type PriceRange = 'low' | 'mid' | 'high';
export type PoolStatus = 'active' | 'inactive' | 'temporary_closed';

export interface DaySchedule {
  day: Day;
  times: string[];
  desc?: string;
}

export interface Schedule {
  freeSwim: DaySchedule[];
  lesson: DaySchedule[];
  note?: string;
  imageUrl?: string;
}

export interface Pool {
  id: string;
  name: string;
  address: string;
  district: string;
  lat: number;
  lng: number;
  isPublic: boolean;
  priceRange: PriceRange;
  hasLesson: boolean;
  isNightOpen: boolean;
  hasWeekendFreeSwim: boolean;
  schedule: Schedule;
  contact: string;
  imageUrl: string[];
  status: PoolStatus;
  createdAt: string;
} 