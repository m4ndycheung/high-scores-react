import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";

// single statement arrow functions do not need curly brackets.
// after the arrow it will return.
// if I add curly brackets, I need to write 'return'
const App = () => {
  let sortedCountryScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  return <HighScoreTable countries={sortedCountryScores} />;
};

export default App;
