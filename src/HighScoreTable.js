import React from "react";
import "./HighScoreTable.css";
import { allCountryScores } from "./scores";

const HighScoreTable = () => {
  const data = allCountryScores;

  return (
    <div className="High-score-table">
      {data?.map((country) => {
        return (
          <div>
            <h2>{country.name}</h2>
            {data?.country?.map((item) => (
              <div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

//   return (
//     <div className="High-score-table">
//       {data?.map((country) => (
//         <h2>{country.name}</h2>
//       ))}
//     </div>
//   );
// };

export default HighScoreTable;

// {
//   data?.country.map((player) => (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <td>{player.score}</td>
//             <td>9000</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   ));
// }
