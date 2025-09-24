# Vietnam Holiday Planner 🇻🇳

An interactive web application for planning trips to Vietnam, featuring detailed destination information, Michelin-starred restaurants, Anthony Bourdain's picks, flight information, and comprehensive travel resources.

## ✨ Features

- **🗺️ Interactive Map**: Clickable map of Vietnam with destinations marked by region
- **🏛️ 8 Major Destinations**: Complete coverage from Hanoi to Ho Chi Minh City
- **🍜 Comprehensive Food Guide**:
  - Michelin-starred restaurants with booking links
  - Anthony Bourdain's legendary picks
  - Netflix Street Food series features
  - Local favorites and hidden gems
- **✈️ Flight Information**: Real pricing, routes, and booking links
- **🏠 Accommodations**: Direct Airbnb links to verified properties
- **🎯 Tour Providers**: Verified operators for Ha Giang Loop, Cat Ba Express, etc.
- **📅 December 2024 Itineraries**: Ready-to-use travel plans
- **🔗 Clickable Highlights**: Each attraction links to Google search for details
- **📱 Mobile-Responsive**: Works perfectly on all device sizes

## 🚀 Quick Start

### Option 1: Instant Launch (Recommended)
Simply open `index.html` in your web browser - no installation required!

### Option 2: Development Setup
```bash
npm install --legacy-peer-deps
npm run dev
```

### Option 3: Production Deployment
```bash
# Auto-deploy to GitHub and Railway
./deploy.sh

# Manual deployment
npm run deploy
```

## 🌐 Live Deployment

This application is configured for automatic deployment to Railway with GitHub integration.

### Auto-Deployment Setup:
1. **GitHub Actions** - Automatic CI/CD pipeline on every push
2. **Railway Integration** - Live deployment with custom domain support
3. **Health Monitoring** - Built-in health checks and error recovery

### Manual Deployment Commands:
```bash
# Quick auto-commit and deploy
npm run auto-commit

# Build and deploy to Railway
npm run deploy

# Local testing
npm start
```

## 🌍 Destinations

### North Vietnam (Green)
- **Hanoi** - Capital with UNESCO sites and street food
- **Sapa** - Mountain terraces and ethnic villages
- **Ha Giang** - UNESCO Geopark with famous loop tour
- **Ha Long Bay** - UNESCO World Heritage limestone karsts
- **Lan Ha Bay** - Less crowded alternative with pristine waters
- **Cat Ba Island** - National park and Vietnam War caves
- **Ninh Binh** - "Halong Bay on Land" with karst cliffs

### Central Vietnam (Yellow)
- **Hoi An** - Ancient UNESCO trading port with lanterns

### South Vietnam (Red)
- **Ho Chi Minh City (Saigon)** - Modern metropolis with diverse food scene

## 🍽️ Food Authority Sources

Our restaurant recommendations are curated from leading food authorities:
- **Michelin Guide Vietnam 2024-2025** (starred restaurants)
- **Anthony Bourdain** (Parts Unknown, No Reservations, A Cook's Tour)
- **TimeOut** (Restaurant of the Year, Best Atmosphere, Essential picks)
- **Eater** (Essential restaurants, Rising stars, Community choice)
- **Condé Nast Traveler** (Top fine dining, Cultural experiences, Responsible travel)
- **Netflix Street Food Series**
- **National Geographic Travel**
- **James Beard Foundation** (Award winners for Vietnamese cuisine)
- **Travel + Leisure** (International dining features)

### Featured Restaurants Include:
- **Ănăn Saigon** - Michelin One Star Vietnamese fusion
- **The Lunch Lady** - Bourdain's legendary street food find
- **Pho Le** - Called "best pho in all of Vietnam"
- **Banh Mi Phuong** - Bourdain's favorite banh mi in Hoi An
- **Madame Hiền** - TimeOut Hanoi's Restaurant of the Year
- **Secret Garden** - Condé Nast's most atmospheric Saigon dining
- **Propaganda Bistro** - TimeOut's best atmosphere with Eater recognition
- **Vy's Market** - Eater's #1 pick in Hoi An with cooking classes
- **Reaching Out Tea House** - TimeOut's most meaningful dining experience
- Plus 20+ more authenticated picks from leading food authorities

## ✈️ Travel Intelligence

- **Flight Pricing**: Real data from USA to Vietnam ($700-1500 economy)
- **Airport Guide**: SGN cheaper from US, HAN better for north-south routes
- **Booking Links**: Direct access to Google Flights, Kayak, Expedia, etc.
- **December Weather**: Perfect timing guidance for each destination
- **Transportation**: Bus, train, and motorbike routes between cities

## 🏠 Accommodations

Direct Airbnb links to 8+ verified properties including:
- Hanoi Old Quarter stays
- Sapa mountain retreats (5 options)
- Ha Long Bay luxury accommodations
- All with descriptions and direct booking

## 🛣️ December 2024 Itinerary Ideas

**Dec 5-14**: Ha Giang + Mountains Route (9 days)
**Dec 14-21**: Mixed North Vietnam Experience (7 days)

## 🔧 Technology Stack

- **Frontend**: React 18 + TypeScript
- **Maps**: Leaflet with custom markers
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build**: Vite
- **Data**: Structured JSON with real addresses and links

## 📁 Project Structure

```
├── final-enhanced-index.html    # Complete standalone app
├── src/
│   ├── components/              # React components
│   ├── data/                   # Structured destination/restaurant data
│   ├── types/                  # TypeScript definitions
│   └── pages/                  # Main app pages
├── enhanced-index.html         # Previous version
└── README.md                   # This file
```

## 🤝 Contributing

Contributions welcome! To add destinations or restaurants:
1. Fork the repository
2. Update the JSON files in `src/data/`
3. Test with the HTML version
4. Submit a pull request

## 📄 Data Sources

Curated from:
- Personal travel experiences (3/23-4/6/23 detailed itinerary)
- Michelin Guide Vietnam official selections
- Anthony Bourdain's Vietnam episodes across all shows
- Food authority publications (Eater, National Geographic, etc.)
- Verified tour operator websites and Airbnb properties

## 📜 License

MIT License - Use this for your own Vietnam travel planning!

## 🌟 Star This Repo

If this helped plan your Vietnam trip, please give it a star! ⭐