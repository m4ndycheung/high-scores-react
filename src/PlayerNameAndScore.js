import React from "react";

// I passed props in the parent component.
// I named them player and score so I need to use the same names here.
const PlayerNameAndScore = ({ player, score }) => {
  return (
    // <> is a react fragment used to group multiple elements without using <div>
    <>
      <td>{player}</td>
      <td>{score}</td>
    </>
  );
};

export default PlayerNameAndScore;
