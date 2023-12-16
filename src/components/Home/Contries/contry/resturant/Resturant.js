import React from 'react'
import './resturant.css'
import { useNavigate } from 'react-router'
const Resturant = ({res}) => {
  console.log(res);
  const navigate=useNavigate();
  const handleresturant=()=>{
    navigate("/resdet",{state:{item:res}})
  }
  return (
    <>
      <div onClick={handleresturant} style={{
        height:"350px",
        cursor:'pointer'
      }} className="resturant" >
        <div className="res-img">
          <img src={res.res_img} alt="" />
        </div>
        <div className="res-details">
          <h3 style={{textAlign:'center'}}>{res.res_title}</h3>
          <div className="contry-details">
                    <h6 className="contry-name">
                    {res.res_description}</h6>
                    <div className="rate" style={{
                      marginBottom:'10px',
                      display:'flex',
                      alignItems:'center',
                      gap:'3px',
                    }}>
                    </div>
                  </div>
          <div className="resturant-rate py-2">
            {
              [0,1,2,3,4].map((starind,index)=>{
                return(
                  <i key={index} className="fa-solid fa-star" style={{
                    color: starind<res.rate ?'#f8c907' :'#ccc'
                  }} ></i>
                )
              })
            }
        </div>
        </div>

      </div>
    </>
  )
}

export default Resturant
