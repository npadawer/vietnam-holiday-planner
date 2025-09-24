import React, { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Calendar, DollarSign, Star, ExternalLink, Utensils, Camera, Mountain, Building } from 'lucide-react';
import { Destination, Restaurant, Activity, Accommodation } from '../types';

interface DestinationPageProps {
  destination: Destination;
  restaurants: Restaurant[];
  activities: Activity[];
  accommodations: Accommodation[];
  onBack: () => void;
}

const DestinationPage: React.FC<DestinationPageProps> = ({
  destination,
  restaurants,
  activities,
  accommodations,
  onBack
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'food' | 'activities' | 'stay'>('overview');

  const destinationRestaurants = restaurants.filter(r => r.destinationId === destination.id);
  const destinationActivities = activities.filter(a => a.destinationId === destination.id);
  const destinationAccommodations = accommodations.filter(a => a.destinationId === destination.id);

  const regionColors = {
    north: '#10B981',
    central: '#F59E0B',
    south: '#EF4444'
  };

  const activityIcons = {
    cultural: <Building size={16} />,
    adventure: <Mountain size={16} />,
    nature: <Camera size={16} />,
    food: <Utensils size={16} />,
    nightlife: <Star size={16} />,
    historical: <Building size={16} />
  };

  const getPriceSymbol = (range: string) => {
    return range === '$' ? '$' : range === '$$' ? '$$' : '$$$';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Map
            </button>

            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{destination.name}</h1>
                <p className="text-gray-600 text-lg mb-4">{destination.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{backgroundColor: regionColors[destination.region]}}
                  >
                    {destination.region.toUpperCase()} VIETNAM
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{destination.bestTimeToVisit}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{destination.coordinates[0].toFixed(2)}, {destination.coordinates[1].toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="mt-8 border-b border-gray-200">
              <nav className="flex space-x-8">
                {[
                  { id: 'overview', label: 'Overview', count: destination.highlights.length },
                  { id: 'food', label: 'Food & Dining', count: destinationRestaurants.length },
                  { id: 'activities', label: 'Activities', count: destinationActivities.length },
                  { id: 'stay', label: 'Where to Stay', count: destinationAccommodations.length }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.label} ({tab.count})
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Highlights */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transportation */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Getting There</h2>
              <div className="space-y-3">
                {destination.transportFromHanoi && (
                  <div className="flex items-start gap-3">
                    <span className="font-medium text-gray-700">From Hanoi:</span>
                    <span className="text-gray-600">{destination.transportFromHanoi}</span>
                  </div>
                )}
                {destination.transportFromSaigon && (
                  <div className="flex items-start gap-3">
                    <span className="font-medium text-gray-700">From Saigon:</span>
                    <span className="text-gray-600">{destination.transportFromSaigon}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'food' && (
          <div className="space-y-6">
            {destinationRestaurants.length > 0 ? (
              destinationRestaurants.map((restaurant) => (
                <div key={restaurant.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        {restaurant.name}
                        {restaurant.bourdainPick && (
                          <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                            Bourdain's Pick
                          </span>
                        )}
                      </h3>
                      <p className="text-blue-600 font-medium">{restaurant.specialty}</p>
                      {restaurant.address && (
                        <p className="text-sm text-gray-500 mt-1">{restaurant.address}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {getPriceSymbol(restaurant.priceRange)}
                      </div>
                      {restaurant.userRating && (
                        <div className="flex items-center gap-1 mt-1">
                          <Star size={14} className="text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{restaurant.userRating}/5</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{restaurant.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {restaurant.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        >
                          {tag.replace('-', ' ')}
                        </span>
                      ))}
                    </div>
                    {restaurant.openingHours && (
                      <span className="text-sm text-gray-500">
                        <Clock size={14} className="inline mr-1" />
                        {restaurant.openingHours}
                      </span>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <Utensils className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600">No restaurants listed for this destination yet.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="space-y-6">
            {destinationActivities.length > 0 ? (
              destinationActivities.map((activity) => (
                <div key={activity.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        {activityIcons[activity.type]}
                        {activity.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-500">
                        <span className="capitalize bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                          {activity.type}
                        </span>
                        <span><Clock size={14} className="inline mr-1" />{activity.duration}</span>
                        {activity.difficulty && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            activity.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                            activity.difficulty === 'moderate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {activity.difficulty}
                          </span>
                        )}
                      </div>
                    </div>
                    {activity.cost && (
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{activity.cost}</div>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 mb-4">{activity.description}</p>

                  {activity.tips && activity.tips.length > 0 && (
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                      <h4 className="font-medium text-blue-800 mb-2">Tips:</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        {activity.tips.map((tip, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <Mountain className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600">No activities listed for this destination yet.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'stay' && (
          <div className="space-y-6">
            {destinationAccommodations.length > 0 ? (
              destinationAccommodations.map((accommodation) => (
                <div key={accommodation.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{accommodation.name}</h3>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="capitalize bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm">
                          {accommodation.type}
                        </span>
                        {accommodation.location && (
                          <span className="text-sm text-gray-500">
                            <MapPin size={14} className="inline mr-1" />
                            {accommodation.location}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">
                        {getPriceSymbol(accommodation.priceRange)}
                      </div>
                      {accommodation.url && (
                        <a
                          href={accommodation.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2"
                        >
                          <ExternalLink size={14} />
                          View Details
                        </a>
                      )}
                    </div>
                  </div>

                  {accommodation.description && (
                    <p className="text-gray-700">{accommodation.description}</p>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12 bg-white rounded-lg">
                <Building className="mx-auto text-gray-400 mb-4" size={48} />
                <p className="text-gray-600">No accommodations listed for this destination yet.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationPage;