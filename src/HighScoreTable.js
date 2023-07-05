import React from "react";
import "./HighScoreTable.css";

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
                {country.scores.map((player, index) => (
                  <tr key={index}>
                    <td>{player.n}</td>
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
