import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Destination } from '../types';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const regionColors = {
  north: '#10B981',
  central: '#F59E0B',
  south: '#EF4444'
};

const createCustomIcon = (region: 'north' | 'central' | 'south') => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="
      background-color: ${regionColors[region]};
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 12px;
    ">📍</div>`,
    iconSize: [25, 25],
    iconAnchor: [12, 12],
  });
};

interface VietnamMapProps {
  destinations: Destination[];
  onDestinationClick: (destination: Destination) => void;
  selectedDestination?: Destination | null;
}

const VietnamMap: React.FC<VietnamMapProps> = ({
  destinations,
  onDestinationClick,
  selectedDestination
}) => {
  const center: [number, number] = [16.0, 106.0];

  return (
    <div className="relative">
      <div className="mb-4 flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{backgroundColor: regionColors.north}}></div>
          <span>North Vietnam</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{backgroundColor: regionColors.central}}></div>
          <span>Central Vietnam</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{backgroundColor: regionColors.south}}></div>
          <span>South Vietnam</span>
        </div>
      </div>

      <MapContainer
        center={center}
        zoom={6}
        style={{ height: '500px', width: '100%' }}
        className="rounded-lg shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={destination.coordinates}
            icon={createCustomIcon(destination.region)}
            eventHandlers={{
              click: () => onDestinationClick(destination),
            }}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-lg">{destination.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{destination.description}</p>
                <div className="mt-2">
                  <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium text-white`}
                        style={{backgroundColor: regionColors[destination.region]}}>
                    {destination.region.toUpperCase()}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">📅 {destination.duration}</p>
                <button
                  onClick={() => onDestinationClick(destination)}
                  className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Explore Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default VietnamMap;