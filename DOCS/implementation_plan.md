# CDL Match Predictor: Two-Phase Implementation Plan

This implementation plan is structured to deliver a fully functional, premium React web application tailored for deployment on **Netlify**. It is divided into two distinct phases, ensuring that *both* phases provide immediate, tangible value to the end user.

---

## Phase 1: The Core Experience (Live Hub & Scheduling)
**End-User Value:** Fans immediately get a beautifully designed, fast, and centralized hub to track upcoming Call of Duty League schedules, tournament brackets, and foundational team performance records without hunting through multiple websites.

### Checklist
- [ ] **Repository Setup & Architecture**
  - [ ] Initialize a new React project using Vite (`npx create-vite cdl-predictor --template react`).
  - [ ] Configure the `netlify.toml` file to ensure smooth build processes and client-side routing fallback for Netlify.
- [ ] **Design System Foundation**
  - [ ] Establish the premium aesthetic using **Vanilla CSS**.
  - [ ] Integrate modern typography (e.g., Google Fonts `Inter` or `Outfit`).
  - [ ] Set up the dark-mode color variables (HSL format) and base styling for glassmorphism effects.
- [ ] **Backend / API Proxy Foundation**
  - [ ] Create Netlify Serverless Functions (or an Express Node.js proxy) to handle Liquipedia API Requests.
  - [ ] Implement local caching within the proxy to respect Liquipedia's strict rate limits (never fetching directly from the client side).
- [ ] **Liquipedia Integration (Core Data)**
  - [ ] Set up API calls to fetch current tournaments and upcoming matches.
  - [ ] Set up API calls to fetch general team standings and basic W/L records.
- [ ] **Frontend Component Development**
  - [ ] Build the `MatchDashboard`: A sleek grid or list displaying upcoming fixtures by date.
  - [ ] Build the `TeamCard`: A component summarizing a team's current standing and recent basic record.
  - [ ] Add loading skeletons and micro-animations (hover effects, smooth page transitions).
- [ ] **Phase 1 Launch**
  - [ ] Perform UI/UX review for responsiveness on mobile and desktop.
  - [ ] Deploy v1.0 continuous integration pipeline directly to Netlify.

---

## Phase 2: The Predictive Edge (Prediction Engine & Deep Stats)
**End-User Value:** Empowers the user with data-driven insights. Rather than just seeing *who* is playing, the user now sees *who is favored to win* based on a statistical model, backed up by deep head-to-head metrics and specific game-mode win rates.

### Checklist
- [ ] **Advanced Liquipedia Data Mapping**
  - [ ] Expand the serverless functions to query and parse map-by-map statistics (Hardpoint, Search & Destroy, Control).
  - [ ] Fetch historical matchup data between specific teams for the current season.
- [ ] **The Prediction Engine Algorithm**
  - [ ] Develop the JS logic model to calculate Win Probabilities.
  - [ ] Implement the weighting system: Recent Form (35%), Series H2H (25%), Map Win Rates (25%), Roster Synergy (15%).
- [ ] **Advanced Frontend Components**
  - [ ] Build the `PredictionGauge`: Animated bars displaying the calculated Win Probability percentage between two teams.
  - [ ] Build the `HeadToHead` view: A side-by-side comparative UI highlighting advantages in specific game modes.
  - [ ] Build the `FormTracker`: A visual representation (e.g., W-W-L-W-L) of a team's last 5 matches.
- [ ] **Integration & State Management**
  - [ ] Thread the prediction data into the existing `MatchDashboard` so upcoming matches show the predicted favorite at a glance.
  - [ ] Implement caching on the frontend (e.g., React Context or a lightweight store) to prevent unnecessary re-renders of the prediction math.
- [ ] **Phase 2 Polish & Launch**
  - [ ] Optimize the aesthetic pop of the statistics (using vibrant accent colors for the favored team).
  - [ ] Review SEO meta tags and ensure semantic HTML for accessibility.
  - [ ] Deploy the v2.0 predictive upgrade to Netlify.
