import React from 'react'
import './visited2.css'
import 'react-vertical-timeline-component/style.min.css';
import { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from 'antd';
/* import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
 */
const Visited2 = () => {
  const [data,setdata]=useState([
    {
      day_num:1,
      hotel:'hotel name',
      palce:"place name",
      hotel_img:require("../../assets/images/Baron-Empain-Palace.webp"),
      restu_name:"resturant name",
      hotel_icon:require("../../assets/icons/chatbot.png"),
      restu_icon:require("../../assets/icons/chatbot.png"),
    },
    {
      day_num:2,
      hotel:'hotel name',
      palce:"place name",
      hotel_img:require("../../assets/images/Baron-Empain-Palace.webp"),
      restu_name:"resturant name",
      hotel_icon:require("../../assets/icons/chatbot.png"),
      restu_icon:require("../../assets/icons/chatbot.png"),
    },
    {
      day_num:3,
      hotel:'hotel name',
      palce:"place name",
      hotel_img:require("../../assets/images/Baron-Empain-Palace.webp"),
      restu_name:"resturant name",
      hotel_icon:require("../../assets/icons/chatbot.png"),
      restu_icon:require("../../assets/icons/chatbot.png"),
    },
  ])
  return (
    <div className="alltimelines_div">
      <div className="allresturant_timelines">
        <Timeline position="alternate">
        {
          data.map((item,index)=>{
            return(
              <TimelineItem >
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <img style={{
                    width:'100%',
                    height:'100%',
                    borderRadius:'50%'
                  }} src={item.hotel_img} alt="" />
                {/*   <FastfoodIcon /> */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6"
                style={{
                  color:'orangered',
                  textTransform:'capitalize'
                }}
                component="span">
                  {item.restu_name}
                </Typography>
                <Typography
                  style={{
                    color:'white'
                  }}
                >
                  day number: {item.day_num}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            )
          })
        }
                  <div style={{
            marginTop:'10px',
            textAlign:'center'
          }}>
          <span
          style={{
            textTransform:'capitalize',
          }}
          >total money:44</span>
          </div>
        </Timeline>
      </div>
      <div className="allresturant_timelines">
        <Timeline position="alternate">
        {
          data.map((item,index)=>{
            return(
              <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <img style={{
                    width:'100%',
                    height:'100%',
                    borderRadius:'50%'
                  }} src={item.hotel_img} alt="" />
                {/*   <FastfoodIcon /> */}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" style={{
                  color:'orangered',
                  textTransform:'capitalize'
                }} component="span">
                  {item.restu_name}
                </Typography>
                <Typography
                style={{
                  color:'white'
                }}
                >
                  day number:{item.day_num}
                </Typography>
              </TimelineContent>

            </TimelineItem>
            )
          })
        }
          <div style={{
            marginTop:'10px',
            textAlign:'center'
          }}>
          <span style={{
            textTransform:'capitalize',
          }}>total money:44</span>
          </div>
        </Timeline>
      </div>
    </div>
  )
}

export default Visited2

/*

    <div className='visited2'>
      <div className='about_resturant_timeline'>
        <VerticalTimeline>
          <div className='visited2_resturant_tie_lines'>
            {
              data.map((item,index)=>{
                return (
                  <VerticalTimelineElement
                  className="vertical-timeline-element--work"

                  contentStyle={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', color: 'orangered' }}
                  contentArrowStyle={{ borderRight: '7px solid  black', right:parseInt(index)%2!==0?'-14px':'',transform:parseInt(index)%2!==0?'rotate(180deg)':'' }}
                  //date="2011 - present"
                  //date={`day number: ${item.day_num}`}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdFastfood />}
                >
                  <div className='visited2_resurant_timeline'>
                  <img src={item.hotel_img} alt="" />
                    <div className='visited2_resurant_timeline_details'>
                      <h3 className="vertical-timeline-element-title">{item.restu_name}</h3>
                      <span>day number: {item.day_num}</span>
                    </div>
                  </div>
                </VerticalTimelineElement>
                )
              })
            }
          </div>
        </VerticalTimeline>
      </div>
      <div className='about_resturant_timeline'>
        <VerticalTimeline>
          <div className='visited2_resturant_tie_lines'>
            {
              data.map((item,index)=>{
                return (
                  <VerticalTimelineElement
                  className="vertical-timeline-element--work"

                  contentStyle={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', color: 'orangered' }}
                  contentArrowStyle={{ borderRight: '7px solid  black', right:parseInt(index)%2!==0?'-14px':'',transform:parseInt(index)%2!==0?'rotate(180deg)':'' }}
                  //date="2011 - present"
                  //date={`day number: ${item.day_num}`}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdFastfood />}
                >
                  <div className='visited2_resurant_timeline'>
                  <img src={item.hotel_img} alt="" />
                    <div className='visited2_resurant_timeline_details'>
                      <h3 className="vertical-timeline-element-title">{item.restu_name}</h3>
                      <span>day number: {item.day_num}</span>
                    </div>
                  </div>
                </VerticalTimelineElement>
                )
              })
            }
          </div>
        </VerticalTimeline>
      </div>
      <div className='about_resturant_timeline'>
        <VerticalTimeline>
          <div className='visited2_resturant_tie_lines'>
            {
              data.map((item,index)=>{
                return (
                  <VerticalTimelineElement
                  className="vertical-timeline-element--work"

                  contentStyle={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', color: 'orangered' }}
                  contentArrowStyle={{ borderRight: '7px solid  black' , right:parseInt(index)%2!==0?'-14px':'',transform:parseInt(index)%2!==0?'rotate(180deg)':''}}
                  //date="2011 - present"
                  //date={`day number: ${item.day_num}`}
                  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  icon={<MdFastfood />}
                >
                  <div className='visited2_resurant_timeline'>
                  <img src={item.hotel_img} alt="" />
                    <div className='visited2_resurant_timeline_details'>
                      <h3 className="vertical-timeline-element-title">{item.restu_name}</h3>
                      <span>day number: {item.day_num}</span>
                    </div>
                  </div>
                </VerticalTimelineElement>
                )
              })
            }
          </div>
        </VerticalTimeline>
      </div>
    </div>
*/
