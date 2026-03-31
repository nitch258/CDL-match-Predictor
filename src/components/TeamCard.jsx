import React from 'react';

const mockTeams = [
  { id: 1, name: 'Atlanta FaZe', wins: 5, losses: 0, form: ['W','W','W','W','W'] },
  { id: 2, name: 'OpTic Texas', wins: 4, losses: 1, form: ['W','W','W','L','W'] },
  { id: 3, name: 'Toronto Ultra', wins: 4, losses: 1, form: ['W','L','W','W','W'] },
  { id: 4, name: 'NY Subliners', wins: 3, losses: 2, form: ['L','L','W','W','W'] },
  { id: 5, name: 'Miami Heretics', wins: 2, losses: 3, form: ['W','L','L','W','L'] },
];

export default function TeamCard() {
  return (
    <div className="team-list">
      {mockTeams.map((team) => (
        <div key={team.id} className="sidebar-team-card">
          <div className="sidebar-team-info">
            <div className="sidebar-team-icon">{team.name.charAt(0)}</div>
            <span className="team-name" style={{fontSize: '1rem'}}>{team.name}</span>
          </div>
          <div className="team-record">
            <span className="win-text">{team.wins}W</span> - <span className="loss-text">{team.losses}L</span>
          </div>
        </div>
      ))}
    </div>
  );
}
