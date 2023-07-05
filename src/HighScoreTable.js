import React from "react";
import "./HighScoreTable.css";
import PlayerNameAndScore from "./PlayerNameAndScore";

const HighScoreTable = ({ countries }) => {
  return (
    // a div wraps around everyone as a component can only return a single element
    <div className="High-score-table">
      {/* the first map accesses each country object in the array */}
      {countries.map((country) => {
        return (
          <div>
            <h2>High Scores: {country.name}</h2>
            <table>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {/* second map goes a level deeper to access the scores array */}
                {country.scores.map((player, index) => (
                  <tr key={index}>
                    {/* Passing down props to component */}
                    <PlayerNameAndScore player={player.n} score={player.s} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default HighScoreTable;
