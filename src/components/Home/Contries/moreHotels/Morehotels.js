import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import {contries} from '../Countries'
import './morehotels.css'
import Card from 'react-bootstrap/Card';
//import { Card } from 'antd';
const Morehotels = () => {
  const location=useLocation();
  const {contryid}=location.state;
  console.log(contryid);
  const [contryhotels,setcontryhotels]=useState({})
  const [hotels,sethotels]=useState([])
  useEffect(()=>{
    gethotels();
  },[])
  const gethotels=()=>{
    //const resturants= contries.filter((cont,index)=>cont.id===contryid)
    console.log(contries?.filter((cont,index)=>cont.id===contryid)[0].hotels)
    setcontryhotels(contries?.filter((cont,index)=>cont.id===contryid)[0]);
    sethotels(contries?.filter((cont,index)=>cont.id===contryid)[0].hotels)
  }
  /* hotels  hotel_img htel_title hotel_description*/
  return (
    <>
          <div className="moreres_top morehotels_top">
      <div className="moreres_top_content">
        <h3>See the finest hotels</h3>
        <p>Your comfort is what matters to us</p>
        <div className="moreres_market">
          <div>
          <i class="fa-solid fa-bed"></i>
            <span>Choose your bedroom</span>
          </div>
          <div>
          <i class="fa-solid fa-bowl-food"></i>
          <span>Choose your food</span>
          </div>
        </div>
      </div>
    </div>

    <div className="container shadow-lg mb-5 bg-white rounded-5">
      <h2>places</h2>
        <div className="container pb-5">
          <div className="row">

            { hotels?.map((res,index)=>{
              return<>
          <div onClick={()=>{
                gethotels(res)
              }} style={{
                cursor:'pointer'
              }} className="resturant col-md-4 g-2" >
        <div className="res-img">
          <img src={res.hotel_img} alt="" />
        </div>
        <div className="res-details">
          <h3 style={{textAlign:'center'}}>{res.htel_title}</h3>
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
            })}
        </div>
        </div>
      </div>

    
      {/* <div className="container resturants">
        <h1>Rest in the finest hotels</h1>
        <div className="restus">
        {
          hotels?.map((res,index)=>{
            return(
              <> */}


{/* <Card style={{ width: '22rem' }}>
      <Card.Img style={{height:'200px'}} variant="top" src={res.hotel_img} />
      <Card.Body>
        <Card.Title>{res.htel_title}</Card.Title>
        <Card.Text>
          <h5 style={{color:'black',fontSize:'17px',textAlign:'left'}}>{res.hotel_description}</h5>
        </Card.Text>
      </Card.Body>
    </Card> */}



              </>

      //       )
      //     })
      //   }
      //   </div>

      // </div>
    // </>
  )
}

export default Morehotels


/*

              <div className="hotel more-hotels">
              <div className="hotel-img more-hotel-img">
                <img src={res.hotel_img} alt="" />
              </div>
              <div className="hotel-details more-hotels-details">
                <h3 style={{textAlign:'center'}}>{res.htel_title}</h3>
                <p>{res.hotel_description}</p>

                <div className="resturant-rate more-hotels-rate">
                  {
                    [0,1,2,3,4].map((starind,index)=>{
                      return(
                        <i key={index} className="fa-solid fa-star" style={{
                          color: starind<res.rate ?'#f8c907' :'#gray23'
                        }} ></i>
                      )
                    })
                  }
              </div>
              </div>

            </div>
*/



/* import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router';
import {contries} from '../Countries'
import './morehotels.css'

const Morehotels = () => {
  const location=useLocation();
  const {contryid}=location.state;
  console.log(contryid);
  const [contryhotels,setcontryhotels]=useState({})
  const [hotels,sethotels]=useState([])
  useEffect(()=>{
    gethotels();
  },[])
  const gethotels=()=>{
    //const resturants= contries.filter((cont,index)=>cont.id===contryid)
    console.log(contries?.filter((cont,index)=>cont.id===contryid)[0].hotels)
    setcontryhotels(contries?.filter((cont,index)=>cont.id===contryid)[0]);
    sethotels(contries?.filter((cont,index)=>cont.id===contryid)[0].hotels)
  }
  const navigate=useNavigate();

  return (
    <>
          <div className="moreres_top morehotels_top">
      <div className="moreres_top_content">
        <h3>See the finest hotels</h3>
        <p>Your comfort is what matters to us</p>
        <div className="moreres_market">
          <div>
          <i class="fa-solid fa-bed"></i>
            <span>Choose your bedroom</span>
          </div>
          <div>
          <i class="fa-solid fa-bowl-food"></i>
          <span>Choose your food</span>
          </div>
        </div>
      </div>
    </div>
      <div className="container resturants">
        <h1>Rest in the finest hotels</h1>
        <div className="restus">
        {
          hotels?.map((res,index)=>{
            return(
              <div className="hotel more-hotels">
              <div className="hotel-img more-hotel-img">
                <img src={res.hotel_img} alt="" />
              </div>
              <div className="hotel-details more-hotels-details">
                <h3 style={{textAlign:'center'}}>{res.htel_title}</h3>
                <p>{res.hotel_description}</p>

                <div className="resturant-rate more-hotels-rate py-2">
                  {
                    [0,1,2,3,4].map((starind,index)=>{
                      return(
                        <i key={index} className="fa-solid fa-star" style={{
                          color: starind<res.rate ?'#f8c907' :'#gray23'
                        }} ></i>
                      )
                    })
                  }
              </div>
              </div>

            </div>
            )
          })
        }
        </div>

      </div>
    </>
  )
}

export default Morehotels
 */
