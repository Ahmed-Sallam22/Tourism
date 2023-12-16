// import React, { useState } from 'react'
// import { useNavigate } from 'react-router'
// import { COLORS } from '../../../../constants'
// import './country.css'
// const Country = ({item }) => {
//   console.log("set", item)
//   const navigate=useNavigate();
//   const handlecontry=()=>{
//     navigate('/contrydetails',{state:{contry:item}})
//   }
//   const [item, setfirst] = useState([])
//   return (
//     <>
//       <div className="contry" onClick={handlecontry}>
//         <div className="contry-img" >
//           <img style={{
//             width:'100%',
//             height:'100%'
//           }} src={item.img} alt="" />

//         </div>
//         <div className="contry-details">
//           <h1 className="contry-name">
//             {item.name}
//           </h1>
//           <p style={{
//             height:'40px',
//             overflow:'hidden',
//             lineHeight:'1.3',
//             fontSize:'19px',
//             fontWeight:'500',

//           }}>
//             {item.description}
//           </p>
//           <div className="rate" style={{
//             marginBottom:'10px',
//             display:'flex',
//             alignItems:'center',
//             gap:'3px',
//           }}>
//             {/* {
//               [0,1,2,3,4].map((starind,index)=>{
//                 return(
//                   <i key={index} className="fa-solid fa-star" style={{
//                     color: starind<item.rate ?'#f8c907' :'#gray23'
//                   }} ></i>
//                 )
//               })
//             } */}
//           {/*   <span>review({item.review})</span> */}
//           </div>
//           {/* <button style={{
//             backgroundColor:COLORS.primary,
//             color:'white',
//             border:'none',
//             width:'70px',
//             height:'40px',
//             borderRadius:'20px',
//             textTransform:'capitalize',
//             cursor:'pointer'
//           }}
//             onClick={handlecontry}
//           > explore</button> */}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Country
