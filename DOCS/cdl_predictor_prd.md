# Product Requirements Document (PRD): CDL Match Predictor

## 1. Product Overview
The **CDL Match Predictor** is a web application designed to forecast the outcomes of Call of Duty League (CDL) matches. By leveraging esports data from the **Liquipedia API**, the application will parse historical match data, team performance metrics, and player statistics to generate win probabilities for upcoming fixtures.

**Primary Goal:** To provide fans, fantasy esports players, and analysts with a fast, aesthetically stunning, and data-driven platform for finding the statistical favorites in CDL matchups.

## 2. Target Audience
- **CDL Fans:** Looking for insights into upcoming matches to see who has the statistical edge.
- **Fantasy Esports Players:** Seeking performance metrics to draft optimal player rosters.
- **Esports Analysts & Bettors:** Requiring comprehensive historical data and statistical prediction modeling.

## 3. Core Features
- **Upcoming Match Hub:** A sleek dashboard displaying all scheduled CDL matches separated by tournament/qualifier.
- **Liquipedia Integration:** Live pull of tournaments, brackets, and match data directly from the Liquipedia API.
- **Prediction Engine:** A statistical model that displays visual "Win Probability" meters for head-to-head matchups.
- **Team & Player Profiles:** Deep statistical breakdowns containing recent forms, map win rates (Hardpoint, SnD, Control), and roster history.
- **Historical Head-to-Head:** Direct comparisons of two opposing teams based on their past encounters in the current season.

## 4. Technical Architecture & Tech Stack

### 4.1. Core Technologies
- **Frontend Framework:** Next.js (React) or Vite (Vanilla JS / React).
- **Styling:** Vanilla CSS (employing rich, modern aesthetics, glassmorphism, smooth animations, and tailored HSL color palettes).
- **Backend / Data Pipeline:** Node.js (or Python) for executing scheduled API calls, data transformation, and serving predictions.
- **Database (Optional/Future):** PostgreSQL or MongoDB to store cached API responses and historical match data.

### 4.2. API Integration Strategy (Liquipedia API)
*Note: The Liquipedia API has strict usage policies and rate limits.*
- **Data Fetching:** The backend orchestrates requests to the Liquipedia API (using appropriate `User-Agent` headers).
- **Caching Mechanism:** To avoid rate-limiting, data must be cached locally or in a database upon retrieval. The frontend will only request from the local cache, never directly hitting the Liquipedia API.
- **Endpoints of Interest:** Queries focusing on `Match`, `Tournament`, `Team`, and `Player` data specific to the Call of Duty namespace.

## 5. The Prediction Engine Model
The underlying prediction algorithm will assign weights to the following criteria to calculate a final Win Probability percentage:
1.  **Recent Form (35%):** Win/loss ratio of the team's last 5 series overall.
2.  **Series Head-to-Head (25%):** Historical win rate against the specific opposing team in the current season.
3.  **Map Win Rates (25%):** Aggregate win rates across the three core game modes (Hardpoint, Search and Destroy, Control).
4.  **Roster Synergy/Volatility (15%):** Penalties applied for recent roster changes or substitutions.

## 6. Design & Aesthetic Requirements
- **Visual Excellence:** The application must feel premium. It will avoid default/generic color palettes and utilize deep, sleek dark modes with vibrant accent colors (e.g., neon blue/magenta trims reminiscent of esports/gaming culture).
- **Typography:** Implementation of crisp, modern fonts like `Inter` or `Outfit`.
- **Micro-Animations:** Fluid state transitions, hover effects on match cards, and animated progress bars for prediction gauges to make the interface feel alive.

## 7. Development Phases

### Phase 1: Discovery & API Setup (Current)
- Secure API access to the Liquipedia API (ensuring compliance with terms).
- Test queries to verify data structures for Tournaments, Teams, and Matches.
- Map the JSON response data to the expected application models.

### Phase 2: Data Pipeline & Backend Foundation
- Set up the local robust environment.
- Construct the caching system to fetch data periodically from Liquipedia and store it locally.

### Phase 3: The Prediction Engine
- Build the logic model to parse the accumulated metrics.
- Calculate the win probabilites dynamically.

### Phase 4: Frontend Development & Visuals
- Scaffold the frontend framework.
- Implement the premium Vanilla CSS design system.
- Build the UI components (Match Cards, Prediction Gauges, Team Breakdown).

### Phase 5: Testing & Launch
- End-to-end testing of data flow from Liquipedia API -> Prediction Engine -> UI.
- SEO Optimization (Meta tags, Semantic HTML).
- Production build compilation.
