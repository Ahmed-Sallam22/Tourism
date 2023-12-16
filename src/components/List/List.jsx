// import React from "react";
// import { useState } from "react";
// import "./list.css";
// import ph from "../../assets/images/122.png";
// import { Button, Modal, Space } from "antd";

// export default function List() {
//   const [but, setbut] = useState([]);
//   const [values, setvalues] = useState([]);
//   const [diseaseArr, setdiseaseArr] = useState([
//     {
//       disease_id: 1,
//       disease_name: "مرض 1",
//       disease_protection: "aaaaaaaaaaaaaa",
//     },
//     {
//       disease_id: 2,
//       disease_name: "مرض 2",
//       disease_protection: "bbbbbbbbbb",
//     },
//   ]);
//   const [symptomsArr, setsymptomsArr] = useState([
//     {
//       symptoms_id: 1,
//       diseases: [1],
//       symptoms_text: "عرض 1",
//       choosed: false,
//     },
//     {
//       symptoms_id: 2,
//       diseases: [1],
//       symptoms_text: "عرض 1-2",
//       choosed: false,
//     },
//     {
//       symptoms_id: 3,
//       diseases: [1],
//       symptoms_text: "عرض 1-3",
//       choosed: false,
//     },
//     {
//       symptoms_id: 4,
//       diseases: [1],
//       symptoms_text: "عرض 1-4",
//       choosed: false,
//     },
//     {
//       symptoms_id: 5,
//       diseases: [1],
//       symptoms_text: "عرض 1-5",
//       choosed: false,
//     },
//     {
//       symptoms_id: 6,
//       diseases: [1],
//       symptoms_text: "عرض 1-6",
//       choosed: false,
//     },
//     {
//       symptoms_id: 7,
//       diseases: [1, 2],
//       symptoms_text: "عرض 1-4 2-1",
//       choosed: false,
//     },
//     {
//       symptoms_id: 8,
//       diseases: [2],
//       symptoms_text: "عرض 1-5 2-2",

//       choosed: false,
//     },
//     {
//       symptoms_id: 9,
//       diseases: [2],
//       symptoms_text: "عرض 1-6 2-3",
//       choosed: false,
//     },
//   ]);
//   const [detectedDes, setDetictedDes] = useState({});

//   function diseases() {
//     let scores = diseaseArr.map((item) => {
//       return { id: item.disease_id, score: 0 };
//     });

//     for (let item of symptomsArr) {
//       if (item.choosed) {
//         for (let j of item.diseases) {
//           scores.map((item) => {
//             return j == item.id ? { ...item, score: item.score++ } : item;
//           });
//         }
//       }
//     }
//     console.log(scores);

//     let maxDiseases = scores[0];
//     for (let i = 0; i < scores.length; i++) {
//       if (scores[i].score > maxDiseases.score) {
//         maxDiseases = scores[i];
//       }
//     }

//     let dess = {
//       ...diseaseArr.find((item) => item.disease_id == maxDiseases.id),
//     };
//     setDetictedDes(dess);
//     // console.log(maxDiseases);

//     // console.log(
//     //   "final dises",
//     //   diseaseArr.find((item) => item.disease_id == maxDiseases.id)
//     // );
//   }

//   return (
//     <>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-4 col-sm-6">
//             <div className="row dir">
//               <div className="col-md-12">
//                 <h3>What do you suffer</h3>
//                 <h6>Symptoms</h6>
//               </div>
//                 <ul>
//                 {symptomsArr
//                   .filter((item) => item.choosed)
//                   .map((item, index) => (
//                     <li>{item.symptoms_text}</li>
//                   ))}
//                 </ul>
//                 <button className="btn-2"
//                 onClick={() => {
//                   let allData = [...symptomsArr];
//                   for (let i = 0; i < allData.length; i++) {
//                     if (allData[i].choosed) {
//                       diseases();
//                       return;
//                     }
//                   }

//                   alert("برجاء اختيار عرض واحد علي الاقل");
//                 }}
//               >
//                 تشخيص
//               </button>
//             </div>
//           </div>
//           <div className="col-md-8 col-sm-6 text-black">
//             <div className="row ">
//               {symptomsArr.map((item) => (
//                 <div className="col-md-2 rounded-4 g-2  symptoms_text">
//                   <button
//                     className="but"
//                     style={{
//                       backgroundColor: item.choosed ? "darkcyan" : "transparent",
//                       color: item.choosed ? "white" : "black",
//                       borderColor:'darkcyan'
//                     }}
//                     onClick={() => {
//                       setsymptomsArr(
//                         symptomsArr.map((innerItem) => {
//                           return innerItem.symptoms_id == item.symptoms_id
//                             ? { ...innerItem, choosed: !innerItem.choosed }
//                             : innerItem;
//                         })
//                       );
//                       // setbut([...but, item.symptoms_id]);
//                       // setvalues([item.symptoms_text])
//                     }}
//                     value={values}
//                   >
//                     {item.symptoms_text}
//                   </button>
//                 </div>
//               ))}

              
//             </div>
//           </div>
//         </div>
//               <h4>{detectedDes?.disease_name}</h4>
//       </div>
//     </>
//   );
// }
