const express = require("express");

const app = express();
const port = 3000;

function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) ans += i;
  return ans;
}

app.get("/", (req, res) => {
  let n = req.query.n;
  res.send("sum of first " + n + " numbers is " + sum(n).toString());
});

// var patients = [
//   {
//     name: "User1",
//     kidneys: [
//       {
//         healthy: false,
//       },
//       {
//         healthy: true,
//       },
//     ],
//   },
// ];

// app.get("/", (req, res) => {
//   res.send(patients);
// });

// app.post("/", (req, res) => {
//   const name = req.query.name;
//   const kidney1isHealthy = req.query.kidney1;
//   const kidney2isHealthy = req.query.kidney2;
//   console.log(name, kidney1isHealthy, kidney2isHealthy);
//   patients.push({
//     name: name,
//     kidneys: [{ healthy: kidney1isHealthy }, { healthy: kidney2isHealthy }],
//   });
//   res.send(patients);
// });

// app.put("/", (req, res) => {
//   const name = req.query.name;
//   const patient = patients.filter((patient) => patient.name === name);
//   patient[0].kidneys[0].healthy = true;
//   patient[0].kidneys[1].healthy = true;
//   res.send(patients);
// });

// app.delete("/", (req, res) => {
//   const name = req.query.name;
//   const indexToDelete = patients.findIndex((patient) => patient.name === name);
//   if (indexToDelete !== -1) {
//     patients.splice(indexToDelete, 1);
//   }
//   res.send(patients);
// });

app.listen(port);
