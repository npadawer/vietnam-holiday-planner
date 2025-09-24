import React, { useState } from 'react';
import { Search, Filter, Map, List } from 'lucide-react';
import VietnamMap from '../components/VietnamMap';
import DestinationCard from '../components/DestinationCard';
import { Destination } from '../types';

interface HomePageProps {
  destinations: Destination[];
  onDestinationSelect: (destination: Destination) => void;
}

const HomePage: React.FC<HomePageProps> = ({ destinations, onDestinationSelect }) => {
  const [viewMode, setViewMode] = useState<'map' | 'grid'>('map');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.highlights.some(h => h.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesRegion = selectedRegion === 'all' || destination.region === selectedRegion;

    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Vietnam Holiday Planner</h1>
            <p className="text-gray-600">Discover the best destinations, food, and experiences in Vietnam</p>
          </div>

          {/* Search and Filters */}
          <div className="pb-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search destinations, activities, or food..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex gap-4">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Regions</option>
                  <option value="north">North Vietnam</option>
                  <option value="central">Central Vietnam</option>
                  <option value="south">South Vietnam</option>
                </select>

                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('map')}
                    className={`px-3 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors ${
                      viewMode === 'map'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Map size={16} />
                    Map
                  </button>
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-2 rounded-md flex items-center gap-2 text-sm font-medium transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <List size={16} />
                    Grid
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {viewMode === 'map' ? (
          <div className="space-y-6">
            <VietnamMap
              destinations={filteredDestinations}
              onDestinationClick={onDestinationSelect}
              selectedDestination={selectedDestination}
            />

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Travel Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">
                    {destinations.filter(d => d.region === 'north').length}
                  </div>
                  <div className="text-sm text-green-700">North Destinations</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">
                    {destinations.filter(d => d.region === 'central').length}
                  </div>
                  <div className="text-sm text-yellow-700">Central Destinations</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">
                    {destinations.filter(d => d.region === 'south').length}
                  </div>
                  <div className="text-sm text-red-700">South Destinations</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onSelect={() => onDestinationSelect(destination)}
              />
            ))}
          </div>
        )}

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <Filter className="mx-auto text-gray-400 mb-4" size={48} />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No destinations found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;