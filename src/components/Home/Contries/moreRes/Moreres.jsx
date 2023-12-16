import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import Resturant from '../contry/resturant/Resturant';
import {contries} from '../Countries'
import './moreres.css'
const Moreres = () => {
  const location=useLocation();
  const navigate=useNavigate();
  const handleresturant=(res)=>{
    navigate("/resdet",{state:{item:res}})
  }
  const {contryid}=location.state;
  console.log(contryid);
  const [contryresturants,setcontryresturants]=useState({})
  const [resturants,setresturants]=useState([]);
  useEffect(()=>{
    getresturants();
  },[])
  const getresturants=()=>{
    //const resturants= contries.filter((cont,index)=>cont.id===contryid)
    console.log(contries?.filter((cont,index)=>cont.id===contryid)[0])
    setcontryresturants(contries?.filter((cont,index)=>cont.id===contryid)[0]);
    setresturants(contries?.filter((cont,index)=>cont.id===contryid)[0].resturant)
  }
  return (
    <>
    <div className="moreres_top">
      <div className="moreres_top_content">
        <h3>Enjoy the best restaurants</h3>
        <p>Easy for you to order food🌭</p>
        <div className="moreres_market">
          <div>
            <i class="fa-solid fa-store"></i>
            <span>1-Select your location</span>
          </div>
          <div>
          <i class="fa-solid fa-bowl-food"></i>
          <span>2-Order your food</span>
          </div>
          <div>
          <i class="fa-solid fa-truck"></i>
          <span>3-Get it from the delivery</span>
          </div>
        </div>
      </div>
    </div>
      <div className="container shadow-lg mb-5 bg-white rounded-5">
        <h3 className='pt-5'>See the finest restaurants and the most delicious dishes</h3>
        <div className="container pb-5">
          <div className="row ">


            {resturants?.map((res,index)=>{
              return<>
              <div  className="col-md-4  resturant cards p-0 card mb-3" onClick={()=>{
                handleresturant(res)
              }} style={{
                cursor:'pointer'
              }} >
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
            })}
        {/* {resturants?.map((res,index)=>{ */}
            {/* return<> */}
        
        
          
        {/* {
          resturants?.map((res,index)=>{
            return<>
                <div className="col-md-4 cards p-0 card mb-3" onClick={()=>{
                handleresturant(res)
              }} style={{
                cursor:'pointer'
              }}>
                <img className='w-100' height={250} src={res.res_img} alt="" />
              <div className="hotel-details more-hotels-details" >
                <h3>{res.res_title}</h3>
                <p>{res.res_description}</p>

                <div className="resturant-rate more-hotels-rate">
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
          })
        } */}
        </div>
        </div>
      </div>
    </>
  )
}

export default Moreres
