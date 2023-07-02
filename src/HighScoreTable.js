import React from "react";

const HighScoreTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
      </thead>
      {/* <tbody>{tableRowResults}</tbody> */}
    </table>
  );
};

export default HighScoreTable;

// const SearchResults = ({ results }) => {
//   const tableRowResults = results.map((person) => {
//     // curly brackets are a multi-line statement function
//     // normal brackets return a single statement (one thing i.e the <tr>)
//     // I can declare variables here!
//     let checkInDate = moment(person.checkInDate);
//     let checkOutDate = moment(person.checkOutDate);

//     function test() {
//       alert("You clicked me!");
//       console.log(person.id);
//     }
//     return (
//       <tr key={person.id}>
//       <tr key={person.id} onClick={test}>
//         <td>{person.id}</td>
//         <td>{person.title}</td>
//         <td>{person.firstName}</td>
//         <td>{person.surname}</td>
//         <td>{person.email}</td>
//         <td>{person.roomId}</td>
//         <td>{checkInDate.format("DD MMM YYYY")}</td>
//         <td>{checkOutDate.format("DD MMM YYYY")}</td>
//         <td>{checkOutDate.diff(checkInDate, "days")}</td>
//       </tr>
//     );
//   });
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>First Name</th>
//           <th>Surname</th>
//           <th>Email</th>
//           <th>Room ID</th>
//           <th>Check In Date</th>
//           <th>Check Out Date</th>
//           <th>Number of Nights</th>
//         </tr>
//       </thead>
//       <tbody>{tableRowResults}</tbody>
//     </table>
//   );
// };
