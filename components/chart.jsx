// import React from "react";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// const VerticalChart = ({ amount }) => {
//   const data = [
//     { name: "Education", value: amount / 4 },
//     { name: "Health", value: amount / 4 },
//     { name: "Infrastructure", value: amount / 4 },
//     { name: "Defense", value: amount / 4 },
//   ];

//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" /> {/* Horizontal axis for categories */}
//       <YAxis /> {/* Vertical axis for numeric values */}
//       <Tooltip />
//       <Bar dataKey="value" fill="#82ca9d" />
//     </BarChart>
//   );
// };

// export default VerticalChart;



// // import React from "react";
// // import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

// // const HorizontalChart = ({ amount }) => {
// //   const data = [
// //     { name: "Education", value: amount / 4 },
// //     { name: "Health", value: amount / 4 },
// //     { name: "Infrastructure", value: amount / 4 },
// //     { name: "Defense", value: amount / 4 },
// //   ];

// //   return (
// //     <BarChart
// //       width={500}
// //       height={300}
// //       data={data}
// //       layout="vertical" // <-- This makes the bars horizontal
// //       margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
// //     >
// //       <CartesianGrid strokeDasharray="3 3" />
// //       <XAxis type="number" /> {/* Horizontal axis for numeric values */}
// //       <YAxis type="category" dataKey="name" /> {/* Vertical axis for categories */}
// //       <Tooltip />
// //       <Bar dataKey="value" fill="#8884d8" />
// //     </BarChart>
// //   );
// // };

// // export default HorizontalChart;
