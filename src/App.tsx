import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import { Destination } from './types';

import destinationsData from './data/destinations.json';
import restaurantsData from './data/restaurants.json';
import activitiesData from './data/activities.json';
import accommodationsData from './data/accommodations.json';

function App() {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const destinations = destinationsData as Destination[];
  const restaurants = restaurantsData;
  const activities = activitiesData;
  const accommodations = accommodationsData;

  const handleDestinationSelect = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleBackToHome = () => {
    setSelectedDestination(null);
  };

  return (
    <div className="App">
      {selectedDestination ? (
        <DestinationPage
          destination={selectedDestination}
          restaurants={restaurants}
          activities={activities}
          accommodations={accommodations}
          onBack={handleBackToHome}
        />
      ) : (
        <HomePage
          destinations={destinations}
          onDestinationSelect={handleDestinationSelect}
        />
      )}
    </div>
  );
}

export default App;