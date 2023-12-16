import './morepls.css';

import React, { useEffect, useState } from 'react'
  import {contries} from '../Countries'
import { useLocation, useNavigate } from 'react-router';
import Places from '../contry/places/Places';
import './morepls.css'
const Morpls = () => {
  const location=useLocation();
  const {contryid}=location.state;
  console.log(contryid);
  const [contryplaces,setcontryplaces]=useState({})
  useEffect(()=>{
    getresturants();
  },[])
  const navigate=useNavigate();

  const handleresturant=(res)=>{
    navigate("/resdet",{state:{item:res}})
  }
  const getresturants=()=>{
    //const resturants= contries.filter((cont,index)=>cont.id===contryid)
    console.log(contries?.filter((cont,index)=>cont.id===contryid)[0])
    setcontryplaces(contries?.filter((cont,index)=>cont.id===contryid)[0]);
  }
  /* contryplaces?.places place_img place_title  place_description*/
  return (
    <>
      <div className="moreres_top">
      <div className="moreres_top_content">
        <h3>I spend my time in the best places to visit</h3>
        <p>Just do it</p>
        <div className="moreres_market">
        <div>
            <i class="fa-solid fa-store"></i>
            <span> 1-Select your location</span>
          </div>
          <div>
          <i class="fa-solid fa-bowl-food"></i>
          <span> 2-Order your food</span>
          </div>
          <div>
          <i class="fa-solid fa-truck"></i>
          <span> 3-Get it from the delivery</span>
          </div>
        </div>
      </div>
    </div>
      <div className="container shadow-lg mb-5 bg-white rounded-5">
      <h2>places</h2>
        <div className="container pb-5">
          <div className="row">

            { contryplaces?.places?.map((res,index)=>{
              return<>
          <div onClick={()=>{
                handleresturant(res)
              }} style={{
                cursor:'pointer'
              }} className="resturant col-md-4 g-2" >
        <div className="res-img">
          <img src={res.place_img} alt="" />
        </div>
        <div className="res-details">
          <h3 style={{textAlign:'center'}}>{res.place_title}</h3>
          <div className="contry-details">
                    <h6 className="contry-name">
                    {res.place_description}</h6>
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
            })}
        </div>
        </div>
      </div>

    </>
  )
}

export default Morpls
