// // import styled from 'styled-components';
// import { useState } from 'react';
// import React from 'react';

// const Wrapper = styled.div`
//   padding: 10px;
//   height: 500px;
// `;

// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 10%;
//   justify-content: center;
// `

// const TableRow = styled.tr`
//   border: 1px solid ghostwhite;
//   text-align: left;
//   padding: 8px;
// `

// const TableHead = styled.th`
//   border: 1px solid black;
//   width: 200px;
//   text-align: left;
//   padding: 8px;

//   :nth-child(even) {
//     background-color: #dddddd;
//   }
// `
// export const IntroToComponentTesting = () => {


//   const [randomName, setRandomName] = useState("");
//   // const randomList = ["Maria Anders", "Francisco Chang", "Roland Mendel", ""];
//   const dataSet = [
//     { company: "Ernst Handel", name: "Roland Mendel", country: "Austria" },
//     { company: "Alfreds Futterkiste", name: "Maria Anders", country: "Germany" },
//     { company: "Centro comercial Moctezuma", name: "Francisco Chang", country: "Mexico" },
//   ]

//   const TableRowWithDate = () => {
//     if (randomName === "Maria Anders") {
//       const matchedName = dataSet[1];
//       return (<TableRow>
//         <TableHead>{matchedName.company}</TableHead>
//         <TableHead>{matchedName.name}</TableHead>
//         <TableHead>{matchedName.country}</TableHead>
//       </TableRow>)
//     }

//     if (randomName === "Roland Mendel") {
//       const matchedName = dataSet[0];
//       return (<TableRow>
//         <TableHead>{matchedName.company}</TableHead>
//         <TableHead>{matchedName.name}</TableHead>
//         <TableHead>{matchedName.country}</TableHead>
//       </TableRow>)
//     }

//     if (randomName === "Francisco Chang") {
//       const matchedName = dataSet[2];

//       return (<TableRow>
//         <TableHead>{matchedName.company}</TableHead>
//         <TableHead>{matchedName.name}</TableHead>
//         <TableHead>{matchedName.country}</TableHead>
//       </TableRow>)
//     }

//     return <TableRow>
//       <TableHead>
//       </TableHead>
//       <TableHead>Not Match</TableHead>
//       <TableHead></TableHead>
//     </TableRow>

//   }

//   return (
//     <>
//       <Wrapper>
//         <p>
//           Random name : {randomName === "" ? "Not Match" : randomName}
//         </p>
//         <table>
//           <thead>
//             <TableRow>
//               <TableHead>Company</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Country</TableHead>
//             </TableRow>
//           </thead>
//           <tbody>
//             <TableRowWithDate />
//           </tbody>
//         </table>

//       </Wrapper>
//       <Row>
//         <button onClick={() => {
//           const randomNumber = Math.floor(Math.random() * dataSet.length);
//           setRandomName(dataSet[randomNumber].name)
//         }}> Random Button
//         </button>
//       </Row>
//     </>
//   )
// }
