import React from 'react';
import { MapPin, Clock, Calendar } from 'lucide-react';
import { Destination } from '../types';

interface DestinationCardProps {
  destination: Destination;
  onSelect: () => void;
}

const regionColors = {
  north: '#10B981',
  central: '#F59E0B',
  south: '#EF4444'
};

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
         onClick={onSelect}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
          <span
            className="px-3 py-1 rounded-full text-xs font-medium text-white"
            style={{backgroundColor: regionColors[destination.region]}}
          >
            {destination.region.toUpperCase()}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {destination.description}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{destination.bestTimeToVisit}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-gray-700">Highlights:</h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {destination.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
            {destination.highlights.length > 3 && (
              <li className="text-blue-500 text-xs font-medium">
                +{destination.highlights.length - 3} more highlights
              </li>
            )}
          </ul>
        </div>

        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <MapPin size={14} />
            <span>{destination.coordinates[0].toFixed(2)}, {destination.coordinates[1].toFixed(2)}</span>
          </div>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium"
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;