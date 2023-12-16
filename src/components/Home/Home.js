import React from 'react'
import Countries from './Contries/Countries'
import './HomeSec/home.css'
import Places from './Contries/contry/places/Places';
import Hotel from './Contries/contry/hotel/Hotel';
import Footer from '../Footer/Footer';
import Chatbot from 'react-chatbot-kit'
import config from '../../Bot/config';
import MessageParser from '../../Bot/MessageParser';
import ActionProvider from '../../Bot/ActionProvider';
import { useState } from 'react';

import {useNavigate } from 'react-router-dom';
import Range from './HomeSec/Range';

import axios from 'axios';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import Slider from "react-slick";
import banner1 from '../../banner/1.jpg'
import banner2 from '../../banner/2.png'
import banner3 from '../../banner/3.png'

import 'react-range-slider-input/dist/style.css';
import Navbar from '../NavBar/Navbar';

const Home = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [Location, setLocation] = useState([])

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display:"none"
        }}
        onClick={onClick}
      />
    );
  }
  
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    slidesToShow: 3,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow:<SampleNextArrow />,
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const [open, setopen] = useState(false)
const [value,setvalue]=useState([]);
//let data = sectiondata.banner

const [Category, setCategory] = useState([])
let formik= useFormik({
  initialValues:{
    category_id:'',
    location_id:'',

    sub_location_id:'',
    min_size :'',
    max_size:'',
    num_room:'',
  },
  onSubmit:Search
});
async function getdata(){
  let Location_data=await axios.get(`https://camp-coding.tech/U_A_D_Walls/user/select_locations.php`).catch(err=>{
    console.log(err);
  })
  let category_data=await axios.get(`https://camp-coding.tech/U_A_D_Walls/user/select_category.php`).catch(err=>{
    console.log(err);
  })
  // console.log("aaaa",data.massage);
  setLocation(Location_data.data.massage)
  setCategory(category_data.data.massage)
  console.log("sfafasfas", category_data.data.massage);
}
useEffect(()=>{
  getdata()
},[])

 
  const contries=[
    {
      id:1,
      img:require("../../assets/images/egp.jpeg"),
      name:"cairo",
      description:"Cairo is the capital of the Arab Republic of Egypt and its largest and most important city, and it is the largest Arab city in terms of population and area",
      rate:1,
      resturant:[
        {
          res_img:require("../../assets/images/egres1.jpg"),
          res_title:"zytunaa Restaurant ",
          res_description:"Elegant restaurant in a hotel with Nile views serving traditional Egyptian cuisine. Service options: On-site dining · Takeaway · Contactless delivery",
          rate:1,
        },
        {
          res_img:require("../../assets/images/egres2.jpg"),
          res_title:"Osmanli Restaurant",
          res_description:"Kempinski's gourmet dining destination serving classic Turkish food and drinks Service options: Eat-in · Takeaway · No delivery service",
          rate:2,
        },
        {
          res_img:require("../../assets/images/egres3jpg.jpg"),
          res_title:"qasr alkababjaa Restaurant",
          res_description:"Meat banquets and traditional Mediterranean side dishes served in an elegant and spacious restaurant with al fresco seating Service options: On-site dining Takeaway food Contactless delivery featuring the best grills",
          rate:4,
        },
        {
          res_img:require("../../assets/images/egres4.jpg"),
          res_title:"sobhy kaber resturant",
          res_description:"Meat banquets and traditional Mediterranean side dishes served in an elegant and spacious restaurant with outdoor seating Service options: On-site dining Takeaway food Contactless delivery Featuring the best grills The best prices with the best quality",
          rate:3,
        },
        {
          res_img:require("../../assets/images/El-Prince-Restaurant-Cairo.webp"),
          res_title:"albirns resturant",
          res_description:"It is not possible to ignore the Prince Restaurant when highlighting the most beautiful restaurants in Cairo, as it is one of the restaurants that is indisputable for the deliciousness and quality of its meals, and what makes it more distinguished is that it excels in providing dishes from the “Egyptian” kitchen",
          rate:3,
        },
        {
          res_img:require("../../assets/images/Anas-El-Demeshky-Cairo.webp"),
          res_title:"Anas Al-Dimashqi Restaurant",
          res_description:"Every restaurant on the list of the most famous restaurants in Cairo excels in a special way. For example, Anas al-Dimashqi restaurant is visited by everyone who loves “Syrian” cuisine and its distinctive food. to a grilled kebab",
          rate:3,
        },
      ],
      hotels:[
        {
          hotel_img:require("../../assets/images/egho6.jpg"),
          htel_title:'Hilton hotel',
          hotel_description:"Explore a new place and make your stay in Cairo unforgettable with Hilton. Become an honors member and get exclusive privileges, including Wi-Fi. It's free to join. Where you live makes a difference. Brands: Hilton, Waldorf Astoria",
          rate:1
        },
        {
          hotel_img:require("../../assets/images/egho2.jpg"),
          htel_title:'diamond hotel',
          hotel_description:"Al Masa Hotel & Spa features a terrace with a swimming pool. It is located in the green area in Nasr City. It offers 5 restaurants and a wellness center. All elegant rooms have a balcony        ",
          rate:2
        },
        {
          hotel_img:require("../../assets/images/egho3jpg.jpg"),
          htel_title:'Sonesta Hotel & Tower Cairo Opens in new window  hotel      ',
          hotel_description:"Sonesta Hotel is located in the residential area of ​​Nasr City, a 10-minute drive from the airport and features 5 restaurants and 2 bars. It features an outdoor pool and a sun terrace.        ",
          rate:4
        },
        {
          hotel_img:require("../../assets/images/egho4.jpg"),
          htel_title:"diamond hotel",
          hotel_description:'8.1 جيد جداً950 تقييم  فندق توليب الذهبي بلازا  فندق توليب الذهبي بلازا  يُفتح في صفحة جديدة',
          rate:3
        },
        {
          hotel_img:require("../../assets/images/egho5.jpg"),
          htel_title:'Intercontinental Citystars Cairo hotel',
          hotel_description:"This luxurious 5-star hotel is located next to Citystars Mall. It features a large outdoor pool and 10 diverse restaurants        ",
          rate:5
        },
        {
          hotel_img:require("../../assets/images/The-best-Cairo-hotels-1.webp"),
          htel_title:'The Ritz-Carlton hotel',
          hotel_description:"One of the best hotels in Cairo on the Nile Corniche. It offers elegant, spacious, fully-equipped units and various recreational facilities such as the outdoor swimming pool, fitness and spa hall, evening entertainment, oriental and international restaurants",
          rate:5
        },
      ],
      places:[
        {
          place_img:require("../../assets/images/khancairo.webp"),
          place_title:"The Pharaonic Village in Cairo",
          place_description:"One of the best tourist places in Cairo, Egypt, as it is an ideal place to learn about Egyptian history and the civilization of the Pharaohs, and to discover the lifestyles that prevailed in those ages. The Pharaonic Village simulates ancient villages of the Pharaohs that were present thousands of years ago, where you can learn about their contents, landmarks, buildings, and even their personalities pharonic village It is considered the pharaonic village",
          rate:1
        },
        {
          place_img:require("../../assets/images/egplc6.jpg"),
          place_title:"Cairo Gardens",
          place_description:"Each of Cairo's gardens has a unique character and features that distinguish it from the tourist areas in Cairo, but they all share the tranquility and beautiful natural scenery that visitors enjoy, so if you are planning an enjoyable day, you should simply visit one of the most beautiful gardens in Cairo selected here        ",
          rate:2
        },
        {
          place_img:require("../../assets/images/egplc3jpg.jpg"),
          place_title:"nile river",
          place_description:"The Nile River is a historical river that flows in northeastern Africa, and is the longest river in Africa and the longest river in the world",
          rate:3
        },
        {
          place_img:require("../../assets/images/cairotour.webp"),
          place_title:"Cairo museums",
          place_description:"Cairo museums are usually relied upon to introduce the city’s cultural heritage and preserve artifacts and paintings for generations to pass, as well as to support tourism in Cairo, and through this guide, you will be able to get to know the most important museums in Cairo that are worth a visit",
          rate:4
        },
        {
          place_img:require("../../assets/images/pycairo.webp"),
          place_title:"Abdeen Palace",
          place_description:'Abdeen Palace is one of the most famous and best tourist places in Cairo, as it is undoubtedly a wonderful historical architectural masterpiece built during the period of the rule of the Muhammad Ali Pasha family in Egypt, where it was at that time the seat of government from 1872 until the year 1952. This palace witnessed Important events since the era of the Queen until the revolution of July 1952, which was the beginning of the emergence of modern Cairo. The palace was converted into a museum visited by thousands of tourists when tourism in Cairo',
          rate:5
        },
        {
          place_img:require("../../assets/images/cairo-tower.webp"),
          place_title:"Cairo Tower",
          place_description:"The cairo tower provides you with a wonderful view of the city of Cairo, Egypt, with its landmarks and neighborhoods, as it reaches a height of 187 meters, which is higher than the largest pyramid located in Giza. Its kind, as it is located on a rotating platform, which makes it rotate to provide visitors to the restaurant with a comprehensive view of the tourist areas in Cairo",
          rate:6
        },
        {
          place_img:require("../../assets/images/city-star-mall.jpg"),
          place_title:"City Stars campawund",
          place_description:"يعد مجمع سيتي ستارز city starts cairo من ابرز وجهات التسوق في مدينة القاهرة فهو احد اكبر مراكز التسوق في المدينة حيث يضم عدد كبير من المحلات التجارية التي تتبع اشهر الماركات العالمية في مجالات الالبسة والازياء بشكل عام اضافة الى غيرها من المتاجر والعديد من المطاعم وصالات السينما واماكن ترفيهية للاطفال وهايبر ماركت سبينيز الشهير",
          rate:7
        },
        {
          place_img:require("../../assets/images/Baron-Empain-Palace.webp"),
          place_title:"Baron's Palace",
          place_description:"Baron Empain Palace is one of the tourist areas in Cairo, and it is a unique architectural masterpiece in the city of Cairo. It was built by the Belgian millionaire Baron Edouard, who came to Egypt from India at the end of the nineteenth century, shortly after the opening of the Suez Canal. The palace is located in the heart of the area. Heliopolis in Cairo, specifically in Al-Orouba Street on the main road leading to Cairo International Airport",
          rate:8
        },
        {
          place_img:require("../../assets/images/international-garden.webp"),
          place_title:"International park",
          place_description:"The international garden is one of the most famous gardens and parks in Cairo, and it is one of the most beautiful tourist places in Cairo. It is located on Abbas Al-Akkad Street in Nasr City, Cairo. The garden includes many sections that contain trees, animals, and plants that are famous for many countries around the world. You can find a special section for the United Arab Emirates. And another section for Bahrain and Saudi Arabia, and another for Japan and other countries. Do not miss visiting this park, as it is one of the best tourist places in Cairo",
          rate:8

        },
      ],
      review:2,
    },
    {
      id:2,
      img:require("../../assets/images/alx.jpeg"),
      name:"Alexandria",
      description:"Alexandria is the second capital of Egypt and was its capital in the past. It is the capital of Alexandria Governorate and its largest city, located on the Mediterranean coast",
      rate:2,
      review:2,
      resturant:[
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:1,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:2,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:4,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:3,
        },
      ],
      hotels:[
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:1
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:2
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:4
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:3
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:5
        },
      ],
      places:[
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:1
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:2
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:3
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:4
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:5
        },
      ],
    },
    {
      id:3,
      img:require("../../assets/images/giza.jpeg"),
      name:"Giza",
      description:"Giza is the capital of the governorate of Giza. Together with Cairo and Shubra al-Khaimah, it formed Greater Cairo    ",
      rate:1,
      review:2,
      resturant:[
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:1,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:2,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:4,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:3,
        },
      ],
      hotels:[
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:1
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:2
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:4
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:3
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:5
        },
      ],
      places:[
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:1
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:2
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:3
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:4
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:5
        },
      ],
    },
    {
      id:4,
      img:require("../../assets/images/aswan.jpg"),
      name:"aswan",
      description:"Historically, Aswan was considered one of the most important cities in southern Egypt and its southern gate",
      rate:5,
      review:2,
      resturant:[
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:1,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:2,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:4,
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:3,
        },
      ],
      hotels:[
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:1
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:2
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:4
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:3
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:5
        },
      ],
      places:[
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:1
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:2
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:3
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:4
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:5
        },
      ],
    },
    {
      id:5,
      img:require("../../assets/images/luxor.jpeg"),
      name:"luxor",
      description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
      rate:3,
      review:2,
      resturant:[
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:1,
          res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:2,
          res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:4,
          res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

        },
        {
          res_img:require("../../assets/images/resturantjpg.jpg"),
          res_title:"resturant title",
          res_description:"resturant description",
          rate:3,
          res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

        },
      ],
      hotels:[
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:1
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:2
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:4
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:3
        },
        {
          hotel_img:require("../../assets/images/hotel.jpg"),
          htel_title:'hotel title',
          hotel_description:"hotel description",
          rate:5
        },
      ],
      places:[
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:1
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:2
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:3
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:4
        },
        {
          place_img:require("../../assets/images/travel.jpg"),
          place_title:"place title",
          place_description:"place description",
          rate:5
        },
      ],
    },
  ]

  const navigate=useNavigate();
  function hello(){
    console.log('heelo');
  }
  async function Search(){
    const {category_id,location_id,sub_location_id,max_size,min_size,num_room}=formik.values
    const datasend={
        category_id,
        location_id,
        sub_location_id,
        min_size,
        max_size,
        num_room,
      max_price:parseInt(value[1])+"",
      min_price :parseInt(value[0])+"",
    }
    console.log("datasend",datasend)
    let res=await axios.post("https://camp-coding.tech/U_A_D_Walls/user/filter_builder_data.php",datasend).catch(err=>{
      console.log(err);
    })
    console.log(res.data)
    if(res.data.status==="success"){
      console.log(res.data.massage);
      navigate("/search-list",{state:{data:res.data.massage}})
    }
  }
  async function getdata(){
    let Location_data=await axios.get(`https://camp-coding.tech/U_A_D_Walls/user/select_locations.php`).catch(err=>{
      console.log(err);
    })
    let category_data=await axios.get(`https://camp-coding.tech/U_A_D_Walls/user/select_category.php`).catch(err=>{
      console.log(err);
    })
    // console.log("aaaa",data.massage);
    setLocation(Location_data.data.massage)
    setCategory(category_data.data.massage)
    console.log("sfafasfas", category_data.data.massage);
  }
  useEffect(()=>{
    getdata()
  },[])
  return  <>
  <Navbar/>
    <div className='home'>
    <Slider {...settings}>
          <div>
    <img src={banner1} alt="" />
          </div>
          <div>
    <img src={banner2} alt="" />
          </div>
          <div>
    <img src={banner3} alt="" />
          </div>
        </Slider>
      <div className='range rounded-3'>
      <form className="ltn__car-dealer-form-box row">
                           
                         
                             <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-6 col-md-6">
                               <select className=" nice-select"    id="Location">
                               <option value="Location" className='select-name'>Location</option>
                                  <option value="Cairo" className='select-name selected'>Cairo</option>
                                  <option value="Giza" className='select-name selected'>Giza</option>
                       </select>
                             </div>
                             <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-6 col-md-6">
                              <input className='form-banner'  name='NumDays' id='Days'  placeholder='Number Of days'/>
                             </div>
                           
 <div className='col-lg-12 col-md-6'>
                                  <Range/>
</div>
                          
                      
                             <div className="col-xl-3 col-lg-4 col-md-4 readeal-top">
                               <button className="btn search-1">SEARCH NOW</button>
                             </div>
                           </form>
      </div>
      <div className="travelimg">
    
        
        <div className='text'>
    


        <div className='chat'
  onClick={()=>{
    setopen(!open)
  }}
  >
<i className="fa-solid fa-robot fa-bounce fa-sm"style={{
  color:'#f8c907'
}} ></i>

        </div>
          {open?<div className='chat-bot'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>:null}


        </div>
      </div>
      </div>



      <div  className="container shadow-lg p-3 bg-white rounded-5">
      <Countries/>
      <div className='container-swiper'>

<div className='center'>
        <h4 style={{textAlign:'left' ,fontSize:'30px'}}>Hotels</h4>
      </div>

      <Slider {...settings2}>
      {
              contries?.map((res,index)=>{
                return(

                      res?.hotels?.map((restu,innerIndex)=>{
                        return(
                            <Hotel res={restu}/>
                        )
                      })

                )
              })
            }

        </Slider>
      <div className='center'>
        <h4 style={{textAlign:'left' ,fontSize:'30px'}}>Places</h4>
      </div>

            <Slider {...settings2}>
      {
              contries?.map((res,index)=>{
                return(

                      res?.places?.map((restu,innerIndex)=>{
                        return(
                            <Places res={restu}/>
                        )
                      })

                )
              })
            }

        </Slider>
      </div>

      </div>


      <Footer/>
 </>
}

export default Home
