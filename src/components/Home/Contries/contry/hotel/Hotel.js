import React from 'react'
import './hotel.css'
import { useNavigate } from 'react-router'
const Hotel = ({res}) => {
  const navigate=useNavigate()
  const handleresturant=()=>{
    navigate("/resdet",{state:{item:res}})
  }
  return (
    <>

<div onClick={handleresturant} style={{
        height:"350px",
        cursor:'pointer'
      }} className="resturant"  >
        <div className="res-img">
          <img src={res.hotel_img} alt="" />
        </div>
        <div className="res-details">
   <h4 className='blac' style={{textAlign:'center',
    }}>{res.htel_title}</h4>
              <div className="contry-details">
                    <h6 className="contry-name">
                    {res.hotel_description}</h6>
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

export default Hotel
