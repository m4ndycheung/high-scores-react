import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";

// single statement arrow functions do not need curly brackets.
// after the arrow it will return.
// if I add curly brackets, I need to write 'return'
const App = () => {
  let sortedByCountryName = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  const sortedByCountryAndScores = sortedByCountryName.map((country) => {
    // used the spread operator to make a copy of country.scores
    // the og country.scores array remains unmodified during the sorting process.
    const sortedScores = [...country.scores].sort((a, b) => b.s - a.s);
    // used the spread operator to copy the country object
    // we can now safely modify this object with the newly sortedScores
    return { ...country, scores: sortedScores };
  });

  return <HighScoreTable countries={sortedByCountryAndScores} />;
};

export default App;
