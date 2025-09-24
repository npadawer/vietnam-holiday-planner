export interface Destination {
  id: string;
  name: string;
  region: 'north' | 'central' | 'south';
  coordinates: [number, number];
  description: string;
  highlights: string[];
  duration: string;
  bestTimeToVisit: string;
  transportFromHanoi?: string;
  transportFromSaigon?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  destinationId: string;
  address?: string;
  coordinates?: [number, number];
  specialty: string;
  description: string;
  priceRange: '$' | '$$' | '$$$';
  bourdainPick?: boolean;
  userRating?: number;
  openingHours?: string;
  tags: string[];
}

export interface Activity {
  id: string;
  name: string;
  destinationId: string;
  type: 'cultural' | 'adventure' | 'nature' | 'food' | 'nightlife' | 'historical';
  description: string;
  duration: string;
  difficulty?: 'easy' | 'moderate' | 'difficult';
  cost?: string;
  coordinates?: [number, number];
  tips?: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  destinationId: string;
  type: 'hotel' | 'hostel' | 'airbnb' | 'homestay';
  url?: string;
  description?: string;
  priceRange: '$' | '$$' | '$$$';
  location?: string;
}

export interface ItineraryItem {
  id: string;
  destinationId: string;
  day: number;
  activities: string[];
  restaurants: string[];
  accommodation?: string;
  notes?: string;
}

export interface Itinerary {
  id: string;
  name: string;
  duration: number;
  items: ItineraryItem[];
  totalCost?: number;
}

export interface FilterOptions {
  region?: 'north' | 'central' | 'south';
  activityType?: Activity['type'];
  priceRange?: '$' | '$$' | '$$$';
  duration?: string;
  bourdainPicks?: boolean;
}