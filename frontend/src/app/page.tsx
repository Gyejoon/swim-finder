import MapContainer from '@/components/map/MapContainer';
import FilterPanel from '@/components/pool/FilterPanel';
import PoolList from '@/components/pool/PoolList';

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <MapContainer />
      </div>
      <div className="absolute top-4 left-4 z-10">
        <FilterPanel />
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-10 md:hidden">
        <PoolList />
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-96 z-10 hidden md:block">
        <PoolList />
      </div>
    </div>
  );
} 