import React from 'react'
import './visitedcity.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GrWorkshop} from 'react-icons/gr'
import { useState } from 'react';
import { useNavigate } from 'react-router';
const VisitedCity = () => {
  const navigate=useNavigate();
  /* res_img, res_title, res_description, rate ,place_description ,place_img ,place_title ,hotel_description ,hotel_img ,htel_title */
  const [data,setdata]=useState([
    {
      day_num:1,
      rate:2,
      hotel:'hotel name',
      palce:"pyramids",
      food_cat:"pizza",
      res_title:'you will enjoy with it',
      res_description:'resturant details description you will eat any thing',
      hotel_img:require("../../assets/images/Baron-Empain-Palace.webp"),
      place_description:'you will visit fantastic place and get amazing experience',
      restu_name:"elhaty",
      place_title:'enjoy with piramids heer',
      hotel_icon:require("../../assets/icons/chatbot.png"),
      res_img:require("../../assets/images/121.jpg"),
      place_img:require("../../assets/images/pyramid.jpeg"),
      restu_icon:require("../../assets/icons/chatbot.png"),
      hotel_description:'fantastic hotel to get very rest time',
      htel_title:'amazing hotel',
    },
    {
      day_num:2,
      hotel:'hotel name',
      rate:2,
      place_description:'you will visit fantastic place and get amazing experience',
      food_cat:"meet",
      res_title:'enjoy with meats heer',
      res_description:'resturant details description you will eat any thing',
      hotel_description:'fantastic hotel to get very rest time',
      place_title:'enjoy with tempelets heer',
      palce:"Sun Boat Museum",
      place_img:require("../../assets/images/place1.jpg"),
      hotel_img:require("../../assets/images/Baron-Empain-Palace.webp"),
      res_img:require("../../assets/images/122.png"),
      restu_name:"foood",
      hotel_icon:require("../../assets/icons/chatbot.png"),
      restu_icon:require("../../assets/icons/chatbot.png"),
      htel_title:'amazing hotel',

    },
    {
      day_num:3,
      hotel:'hotel name',
      rate:2,
      place_description:'you will visit fantastic place and get amazing experience',
      food_cat:"pasta",
      place_title:'enjoy with all things heer',
      place_img:require("../../assets/images/place3.jpg"),
      res_description:'resturant details description you will eat any thing',
      res_title:'best drinks in egypt',
      palce:"giza animal zoo",
      hotel_img:require("../../assets/images/Baron-Empain-Palace.webp"),
      res_img:require("../../assets/images/123.jpg"),
      restu_name:"elsham",
      hotel_icon:require("../../assets/icons/chatbot.png"),
      restu_icon:require("../../assets/icons/chatbot.png"),
      hotel_description:'fantastic hotel to get very rest time',
      htel_title:'amazing hotel',

    },
  ]
  )
  return (
    <>
      <div className='city_images'>
        <img src={require("../../assets/images/pyramid.jpeg")} alt="" />
      </div>
      <div className='lasttry'>
        <div className="last_try_div1">
          <div>
          <span>resturans</span>
          </div>
          {
            data.map((item,index)=>{
              return(
                <div className="restu_time"
                  onClick={()=>{
                    navigate("/placedet",{state:{item:item}})
                  }}
                  style={{
                    cursor:'pointer'
                  }}
                >
                  <div className="restu_time_img">
                    <div className="restu_time_det">
                      <div className="img_span">
                        <img style={{
                        width:'60px',
                        height:'60px',
                        borderRadius:'50%'
                      }} src={item.res_img} alt="" />
                        {
                          parseInt(index)==data.length-1?(
                            null
                          ):(
                            <span style={{
                              width:'1.6px',
                              height:'30px',
                              backgroundColor:'black',
                              display:'black'
                            }}>

                            </span>
                          )
                        }
                      </div>
                    <div className="restu_time_det_details">
                      <div style={{
                        display:'flex',
                        width:'100%',
                        alignItems:'center',
                        justifyContent:'space-between'
                      }}>
                        <div>
                          <h4>{item.restu_name}({item.food_cat})</h4>
                        </div>
                      </div>
                      <h4>day number:{item.day_num}</h4>
                      <h4 >{item.res_title}</h4>

                    </div>
                    </div>

                  </div>
                </div>
              )
            })
          }
                    <div style={{
            textAlign:'center'
          }}>
            <span>total money 4000 L.E</span>
          </div>
        </div>
        <div className="last_try_div1">
          <div>
          <span>places</span>
          </div>
          {
            data.map((item,index)=>{
              return(
                <div className="restu_time"
                onClick={()=>{
                  navigate("/resdet",{state:{item:item}})
                }}
                style={{
                  cursor:'pointer'
                }}
                >
                  <div className="restu_time_img">
                    <div className="restu_time_det">
                      <div className="img_span">
                        <img style={{
                        width:'60px',
                        height:'60px',
                        borderRadius:'50%'
                      }} src={item.place_img} alt="" />
                        {
                          parseInt(index)==data.length-1?(
                            null
                          ):(
                            <span style={{
                              width:'1.4px',
                              height:'30px',
                              backgroundColor:'black',
                              display:'black'
                            }}>

                            </span>
                          )
                        }
                      </div>
                    <div  className="restu_time_det_details">
                      <h4>{item.palce}</h4>
                      <h4>day number:{item.day_num}</h4>
                      <h4>{item.place_title}</h4>
                    </div>
                    </div>

                  </div>

                </div>

              )
            })
          }
          <div style={{
            textAlign:'center'
          }}>
            <span>total money 4000 L.E</span>
          </div>
        </div>
      </div>
      <div
      onClick={()=>{
        navigate("/hotdet",{state:{item:data[0]}})
      }}
  style={{
    cursor:'pointer'
  }}
      className="resturant_city">
        <img src={require("../../assets/images/hothotel.webp")} alt="" />
        <div className="resturant_city_details">
          <h6>
            The Muse Pyramids
          </h6>
          <p style={{

          }}>
            Shadow Pyramids View INN,
            featuring a terrace and a
            bar, is located in Cairo,
            500 meters from Great Sph
            inx and 5 km from Giza Py
            ramids. The property is a
            round 14 km from Cairo To
            wer and 15 km from Mosque
            of Ibn Tulun
          </p>
          <div >
            <h4 style={{
            marginBottom:'20px',
          }}>
              number of days: {data.reduce((current,item)=>{
                return (item.day_num)
              })}
            </h4>
            <h5>
              total money:
              4000L.E
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}

export default VisitedCity








/*



      <div className='all_time_lines'>


<div className='resturant_timelines'>
      {
        data.map((item,index)=>{
          if(parseInt(item.day_num)%2!==0){
            return (
              <div className='before_restu_time_line'>
                <div
                  style={{
                    justifyContent:'right'
                  }}
                className='restu_time_line'>
                  <div className="restu_time_details">
                    <h4>{item.restu_name}</h4>
                    <h6>day number:{item.day_num}</h6>
                  </div>
                  <img style={{
                    width:'60px',
                    height:'60px',
                    borderRadius:'50%'
                  }} src={item.hotel_img} alt="" />
                </div>
                {
                  parseInt(index)==(data.length-1)?(
                    null
                  ):(
                    <div>
                    <span style={{
                      width:'2px',
                      height:'50px',
                      display:'block',
                      backgroundColor:'#ccc'
                    }}></span>
                    </div>
                  )
                }
              </div>
            )
          }
          else return(
            <div className='before_restu_time_line'>
              <div className='restu_time_line'>
              <img style={{
                  width:'60px',
                  height:'60px',
                  borderRadius:'50%'
                }} src={item.hotel_img} alt="" />
                <div className="restu_time_details">
                  <h4>{item.restu_name}</h4>
                  <h6>day number:{item.day_num}</h6>
                </div>
              </div>
              {
                  parseInt(index)==(data.length-1)?(
                    null
                  ):(
                    <div>
                    <span style={{
                      width:'2px',
                      height:'50px',
                      display:'block',
                      backgroundColor:'#ccc'
                    }}></span>
                    </div>
                  )
                }
            </div>
          )
        })
      }
      </div>
      <div className='resturant_timelines'>
      {
        data.map((item,index)=>{
          if(parseInt(item.day_num)%2!==0){
            return (
              <div className='before_restu_time_line'>
                <div
                style={{
                  justifyContent:'right'
                }}
                className='restu_time_line'>
                  <div

                  className="restu_time_details">
                    <h4>{item.restu_name}</h4>
                    <h6>day number:{item.day_num}</h6>
                  </div>
                  <img style={{
                    width:'60px',
                    height:'60px',
                    borderRadius:'50%'
                  }} src={item.hotel_img} alt="" />
                </div>
                {
                  parseInt(index)==(data.length-1)?(
                    null
                  ):(
                    <div>
                    <span style={{
                      width:'2px',
                      height:'50px',
                      display:'block',
                      backgroundColor:'#ccc'
                    }}></span>
                    </div>
                  )
                }
              </div>
            )
          }
          else return(
            <div className='before_restu_time_line'>
              <div className='restu_time_line'>
              <img style={{
                  width:'60px',
                  height:'60px',
                  borderRadius:'50%'
                }} src={item.hotel_img} alt="" />
                <div className="restu_time_details">
                  <h4>{item.restu_name}</h4>
                  <h6>day number:{item.day_num}</h6>
                </div>
              </div>
              {
                  parseInt(index)==(data.length-1)?(
                    null
                  ):(
                    <div>
                    <span style={{
                      width:'2px',
                      height:'50px',
                      display:'block',
                      backgroundColor:'#ccc'
                    }}></span>
                    </div>
                  )
                }
            </div>
          )
        })
      }
      </div>
      <div className='resturant_timelines'>
      {
        data.map((item,index)=>{
          if(parseInt(item.day_num)%2!==0){
            return (
              <div className='before_restu_time_line'>
                <div
                  style={{
                    justifyContent:'right'
                  }}
                className='restu_time_line'>
                  <div className="restu_time_details">
                    <h4>{item.restu_name}</h4>
                    <h6>day number:{item.day_num}</h6>
                  </div>
                  <img style={{
                    width:'60px',
                    height:'60px',
                    borderRadius:'50%'
                  }} src={item.hotel_img} alt="" />
                </div>
                {
                  parseInt(index)==(data.length-1)?(
                    null
                  ):(
                    <div>
                    <span style={{
                      width:'2px',
                      height:'50px',
                      display:'block',
                      backgroundColor:'#ccc'
                    }}></span>
                    </div>
                  )
                }
              </div>
            )
          }
          else return(
            <div
            className='before_restu_time_line'
            >
              <div className='restu_time_line'>
              <img style={{
                  width:'60px',
                  height:'60px',
                  borderRadius:'50%'
                }} src={item.hotel_img} alt="" />
                <div className="restu_time_details">
                  <h4>{item.restu_name}</h4>
                  <h6>day number:{item.day_num}</h6>
                </div>
              </div>
              {
                  parseInt(index)==(data.length-1)?(
                    null
                  ):(
                    <div>
                    <span style={{
                      width:'2px',
                      height:'50px',
                      display:'block',
                      backgroundColor:'#ccc'
                    }}></span>
                    </div>
                  )
                }
            </div>
          )
        })
      }
      </div>





      </div>
*/



/*
    <div>
      <VerticalTimeline>

      <div className='resturants_timelines'>
        {
          data.map((item,index)=>{
            return (
              <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<GrWorkshop />}
            >
              <div className='resurant_timeline'>
              <img src={item.hotel_img} alt="" />
              <h3 className="vertical-timeline-element-title">{item.restu_icon}</h3>
              </div>
            </VerticalTimelineElement>

            )
          })
        }
      </div>


</VerticalTimeline>
    </div>

*/


/*


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>


  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>



    <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<GrWorkshop />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<GrWorkshop />}
  />
*/



/*
  <div className='resturant_timelines'>
      {
        data.map((item,index)=>{
          if(parseInt(item.day_num)%2!==0){
            return (
              <div style={{
                backgroundColor:'red'
              }}>
                <div className='restu_time_line'>
                  <div className="restu_time_details">
                    <h4>{item.restu_name}</h4>
                    <h6>day number:{item.day_num}</h6>
                  </div>
                  <img style={{
                    width:'60px',
                    height:'60px',
                    borderRadius:'50%'
                  }} src={item.hotel_img} alt="" />
                </div>
                <div>
                <span style={{
                  width:'2px',
                  height:'50px',
                  display:'block',
                  backgroundColor:'#ccc'
                }}></span>
                </div>
              </div>
            )
          }
          else return(
            <div style={{
              backgroundColor:'red'
            }}>
              <div className='restu_time_line'>
              <img style={{
                  width:'60px',
                  height:'60px',
                  borderRadius:'50%'
                }} src={item.hotel_img} alt="" />
                <div className="restu_time_details">
                  <h4>{item.restu_name}</h4>
                  <h6>day number:{item.day_num}</h6>
                </div>
              </div>
              <div>
              <span style={{
                width:'2px',
                height:'50px',
                display:'block',
                backgroundColor:'#ccc'
              }}></span>
              </div>
            </div>
          )
        })
      }
      </div>
      <div className='resturant_timelines'>
      {
        data.map((item,index)=>{
          if(parseInt(item.day_num)%2!==0){
            return (
              <div>
                <div className='restu_time_line'>
                  <div className="restu_timelies_details">
                    <h4>{item.hotel}</h4>
                    <h6>day number:{item.day_num}</h6>
                  </div>
                  <img style={{
                    width:'60px',
                    height:'60px',
                    borderRadius:'50%'
                  }} src={item.hotel_img} alt="" />
                </div>
                <div>
                <span style={{
                  width:'2px',
                  height:'50px',
                  display:'block',
                  backgroundColor:'#ccc'
                }}></span>
                </div>
              </div>
            )
          }
          else return(
            <div>
              <div>
                <img style={{
                      width:'60px',
                      height:'60px',
                      borderRadius:'50%'
                    }}  src={item.hotel_img} alt="" />
                <div className="restu_timelies">
                  <h4>{item.restu_name}</h4>
                  <h6>day number:{item.day_num}</h6>
                </div>
              </div>
                <div>
                <span style={{
                  width:'2px',
                  height:'50px',
                  display:'block',
                  backgroundColor:'#ccc'
                }}></span>
                </div>
            </div>
          )
        })
      }
      </div>
      <div className='resturant_timelines'>
      {
        data.map((item,index)=>{
          if(parseInt(item.day_num)%2!==0){
            return (
              <div>
              <div>
                <div className="restu_timelies_details">
                  <h4>{item.restu_name}</h4>
                  <h6>day number:{item.day_num}</h6>
                </div>
                <img style={{
                      width:'60px',
                      height:'60px',
                      borderRadius:'50%'
                    }}  src={item.hotel_img} alt="" />
              </div>
                <div>
                <span style={{
                  width:'2px',
                  height:'50px',
                  display:'block',
                  backgroundColor:'#ccc'
                }}></span>
                </div>
            </div>
            )
          }
          else return(
            <div>
              <div>
                <img
                  style={{
                    width:'60px',
                    height:'60px',
                    borderRadius:'50%'
                  }}
                  src={item.hotel_img}
                  alt=""
                />
                <div className="restu_timelies_details">
                  <h4>{item.restu_name}</h4>
                  <h6>day number:{item.day_num}</h6>
                </div>
              </div>
              {
                parseInt(index)===item.day_num ?(null):(
                  <div>
                  <span style={{
                    width:'2px',
                    height:'50px',
                    display:'block',
                    backgroundColor:'#ccc'
                  }}></span>
                  </div>
                )
              }
            </div>
          )
        })
      }
      </div>


*/
