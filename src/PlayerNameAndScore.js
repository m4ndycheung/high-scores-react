import React from "react";

// I need to pass some props down to this child component
// remmember n = name, s = score
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
