import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";

const App = () => {
  return <HighScoreTable countries={allCountryScores} />;
};

export default App;
