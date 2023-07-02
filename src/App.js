import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";

function App() {
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
      <HighScoreTable scores={allCountryScores} />
    </div>
  );
}

export default App;
