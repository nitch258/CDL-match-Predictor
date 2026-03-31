import './App.css';
import MatchDashboard from './components/MatchDashboard';
import TeamCard from './components/TeamCard';

function App() {
  return (
    <>
      <header className="app-header">
        <div className="header-content">
          <div className="logo">CDL Match Predictor</div>
          <div style={{color: 'hsl(var(--text-secondary))', fontSize: '0.85rem'}}>V1.0 - Live Hub</div>
        </div>
      </header>

      <main className="container dashboard-layout">
        <section>
          <h2 className="section-title">
            <span className="live-indicator"></span>
            Upcoming Matches
          </h2>
          <MatchDashboard />
        </section>

        <section>
          <h2 className="section-title">Standings</h2>
          <div className="glass-panel" style={{padding: '1.5rem'}}>
            <TeamCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
