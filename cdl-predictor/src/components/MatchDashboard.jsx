import React from 'react';

const mockMatches = [
  {
    id: 1,
    time: 'Today, 3:00 PM EST',
    tournament: 'Major 1 Qualifiers',
    team1: { name: 'Atlanta FaZe', form: 'W' },
    team2: { name: 'OpTic Texas', form: 'W' }
  },
  {
    id: 2,
    time: 'Today, 4:30 PM EST',
    tournament: 'Major 1 Qualifiers',
    team1: { name: 'NY Subliners', form: 'L' },
    team2: { name: 'Toronto Ultra', form: 'W' }
  },
  {
    id: 3,
    time: 'Tomorrow, 3:00 PM EST',
    tournament: 'Major 1 Qualifiers',
    team1: { name: 'Miami Heretics', form: 'W' },
    team2: { name: 'Seattle Surge', form: 'L' }
  }
];

export default function MatchDashboard() {
  return (
    <div className="match-list">
      {mockMatches.map((match) => (
        <div key={match.id} className="match-card glass-panel">
          <div className="match-header">
            <span>{match.tournament}</span>
            <span>{match.time}</span>
          </div>
          <div className="match-teams">
            <div className="team-info">
              <div className="team-logo">{match.team1.name.charAt(0)}</div>
              <span className="team-name">{match.team1.name}</span>
            </div>
            <div className="vs">VS</div>
            <div className="team-info">
              <div className="team-logo">{match.team2.name.charAt(0)}</div>
              <span className="team-name">{match.team2.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
