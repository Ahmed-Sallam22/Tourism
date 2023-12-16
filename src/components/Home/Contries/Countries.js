import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {COLORS} from '../../../constants';
import Country from './contry/Country';
import './countries.css'
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
export const contries=[
  {
    id:1,
    img:require("../../../assets/images/egp.jpeg"),
    name:"cairo",
    description:"Cairo is the capital of the Arab Republic of Egypt and its largest and most important city, and it is the largest Arab city in terms of population and area",
    rate:1,
    resturant:[
      {
        res_img:require("../../../assets/images/egres1.jpg"),
        res_title:"zytunaa Restaurant ",
        res_description:"Elegant restaurant in a hotel with Nile views serving traditional Egyptian cuisine. Service options: On-site dining · Takeaway · Contactless delivery",
        rate:1,
      },
      {
        res_img:require("../../../assets/images/egres2.jpg"),
        res_title:"Osmanli Restaurant",
        res_description:"Kempinski's gourmet dining destination serving classic Turkish food and drinks Service options: Eat-in · Takeaway · No delivery service",
        rate:2,
      },
      {
        res_img:require("../../../assets/images/egres3jpg.jpg"),
        res_title:"qasr alkababjaa Restaurant",
        res_description:"Meat banquets and traditional Mediterranean side dishes served in an elegant and spacious restaurant with al fresco seating Service options: On-site dining Takeaway food Contactless delivery featuring the best grills",
        rate:4,
      },
      {
        res_img:require("../../../assets/images/egres4.jpg"),
        res_title:"sobhy kaber resturant",
        res_description:"Meat banquets and traditional Mediterranean side dishes served in an elegant and spacious restaurant with outdoor seating Service options: On-site dining Takeaway food Contactless delivery Featuring the best grills The best prices with the best quality",
        rate:3,
      },
      {
        res_img:require("../../../assets/images/El-Prince-Restaurant-Cairo.webp"),
        res_title:"albirns resturant",
        res_description:"It is not possible to ignore the Prince Restaurant when highlighting the most beautiful restaurants in Cairo, as it is one of the restaurants that is indisputable for the deliciousness and quality of its meals, and what makes it more distinguished is that it excels in providing dishes from the “Egyptian” kitchen",
        rate:3,
      },
      {
        res_img:require("../../../assets/images/Anas-El-Demeshky-Cairo.webp"),
        res_title:"Anas Al-Dimashqi Restaurant",
        res_description:"Every restaurant on the list of the most famous restaurants in Cairo excels in a special way. For example, Anas al-Dimashqi restaurant is visited by everyone who loves “Syrian” cuisine and its distinctive food. to a grilled kebab",
        rate:3,
      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/egho6.jpg"),
        htel_title:'Hilton hotel',
        hotel_description:"Explore a new place and make your stay in Cairo unforgettable with Hilton. Become an honors member and get exclusive privileges, including Wi-Fi. It's free to join. Where you live makes a difference. Brands: Hilton, Waldorf Astoria",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/egho2.jpg"),
        htel_title:'diamond hotel',
        hotel_description:"Al Masa Hotel & Spa features a terrace with a swimming pool. It is located in the green area in Nasr City. It offers 5 restaurants and a wellness center. All elegant rooms have a balcony        ",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/egho3jpg.jpg"),
        htel_title:'Sonesta Hotel & Tower Cairo Opens in new window  hotel      ',
        hotel_description:"Sonesta Hotel is located in the residential area of ​​Nasr City, a 10-minute drive from the airport and features 5 restaurants and 2 bars. It features an outdoor pool and a sun terrace.        ",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/egho4.jpg"),
        htel_title:"diamond hotel",
        hotel_description:'8.1 جيد جداً950 تقييم  فندق توليب الذهبي بلازا  فندق توليب الذهبي بلازا  يُفتح في صفحة جديدة',
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/egho5.jpg"),
        htel_title:'Intercontinental Citystars Cairo hotel',
        hotel_description:"This luxurious 5-star hotel is located next to Citystars Mall. It features a large outdoor pool and 10 diverse restaurants        ",
        rate:5
      },
      {
        hotel_img:require("../../../assets/images/The-best-Cairo-hotels-1.webp"),
        htel_title:'The Ritz-Carlton hotel',
        hotel_description:"One of the best hotels in Cairo on the Nile Corniche. It offers elegant, spacious, fully-equipped units and various recreational facilities such as the outdoor swimming pool, fitness and spa hall, evening entertainment, oriental and international restaurants",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/khancairo.webp"),
        place_title:"The Pharaonic Village in Cairo",
        place_description:"One of the best tourist places in Cairo, Egypt, as it is an ideal place to learn about Egyptian history and the civilization of the Pharaohs, and to discover the lifestyles that prevailed in those ages. The Pharaonic Village simulates ancient villages of the Pharaohs that were present thousands of years ago, where you can learn about their contents, landmarks, buildings, and even their personalities pharonic village It is considered the pharaonic village",
        rate:1
      },
      {
        place_img:require("../../../assets/images/egplc6.jpg"),
        place_title:"Cairo Gardens",
        place_description:"Each of Cairo's gardens has a unique character and features that distinguish it from the tourist areas in Cairo, but they all share the tranquility and beautiful natural scenery that visitors enjoy, so if you are planning an enjoyable day, you should simply visit one of the most beautiful gardens in Cairo selected here        ",
        rate:2
      },
      {
        place_img:require("../../../assets/images/egplc3jpg.jpg"),
        place_title:"nile river",
        place_description:"The Nile River is a historical river that flows in northeastern Africa, and is the longest river in Africa and the longest river in the world",
        rate:3
      },
      {
        place_img:require("../../../assets/images/cairotour.webp"),
        place_title:"Cairo museums",
        place_description:"Cairo museums are usually relied upon to introduce the city’s cultural heritage and preserve artifacts and paintings for generations to pass, as well as to support tourism in Cairo, and through this guide, you will be able to get to know the most important museums in Cairo that are worth a visit",
        rate:4
      },
      {
        place_img:require("../../../assets/images/pycairo.webp"),
        place_title:"Abdeen Palace",
        place_description:'Abdeen Palace is one of the most famous and best tourist places in Cairo, as it is undoubtedly a wonderful historical architectural masterpiece built during the period of the rule of the Muhammad Ali Pasha family in Egypt, where it was at that time the seat of government from 1872 until the year 1952. This palace witnessed Important events since the era of the Queen until the revolution of July 1952, which was the beginning of the emergence of modern Cairo. The palace was converted into a museum visited by thousands of tourists when tourism in Cairo',
        rate:5
      },
      {
        place_img:require("../../../assets/images/cairo-tower.webp"),
        place_title:"Cairo Tower",
        place_description:"The cairo tower provides you with a wonderful view of the city of Cairo, Egypt, with its landmarks and neighborhoods, as it reaches a height of 187 meters, which is higher than the largest pyramid located in Giza. Its kind, as it is located on a rotating platform, which makes it rotate to provide visitors to the restaurant with a comprehensive view of the tourist areas in Cairo",
        rate:6
      },
      {
        place_img:require("../../../assets/images/city-star-mall.jpg"),
        place_title:"City Stars campawund",
        place_description:"يعد مجمع سيتي ستارز city starts cairo من ابرز وجهات التسوق في مدينة القاهرة فهو احد اكبر مراكز التسوق في المدينة حيث يضم عدد كبير من المحلات التجارية التي تتبع اشهر الماركات العالمية في مجالات الالبسة والازياء بشكل عام اضافة الى غيرها من المتاجر والعديد من المطاعم وصالات السينما واماكن ترفيهية للاطفال وهايبر ماركت سبينيز الشهير",
        rate:7
      },
      {
        place_img:require("../../../assets/images/Baron-Empain-Palace.webp"),
        place_title:"Baron's Palace",
        place_description:"Baron Empain Palace is one of the tourist areas in Cairo, and it is a unique architectural masterpiece in the city of Cairo. It was built by the Belgian millionaire Baron Edouard, who came to Egypt from India at the end of the nineteenth century, shortly after the opening of the Suez Canal. The palace is located in the heart of the area. Heliopolis in Cairo, specifically in Al-Orouba Street on the main road leading to Cairo International Airport",
        rate:8
      },
      {
        place_img:require("../../../assets/images/international-garden.webp"),
        place_title:"International park",
        place_description:"The international garden is one of the most famous gardens and parks in Cairo, and it is one of the most beautiful tourist places in Cairo. It is located on Abbas Al-Akkad Street in Nasr City, Cairo. The garden includes many sections that contain trees, animals, and plants that are famous for many countries around the world. You can find a special section for the United Arab Emirates. And another section for Bahrain and Saudi Arabia, and another for Japan and other countries. Do not miss visiting this park, as it is one of the best tourist places in Cairo",
        rate:8

      },
    ],
    review:2,
  },
  {
    id:2,
    img:require("../../../assets/images/alx.jpeg"),
    name:"Alexandria",
    description:"Alexandria is the second capital of Egypt and was its capital in the past. It is the capital of Alexandria Governorate and its largest city, located on the Mediterranean coast",
    rate:2,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:3,
    img:require("../../../assets/images/giza.jpeg"),
    name:"Giza",
    description:"Giza is the capital of the governorate of Giza. Together with Cairo and Shubra al-Khaimah, it formed Greater Cairo    ",
    rate:1,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:4,
    img:require("../../../assets/images/aswan.jpg"),
    name:"aswan",
    description:"Historically, Aswan was considered one of the most important cities in southern Egypt and its southern gate",
    rate:5,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:5,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"luxor",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:6,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"Tanta",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:7,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"Cairo",
    description:"Cairo is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:8,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"Gharbia",
    description:"Gharbia is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:9,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"Sharm",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:10,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"Dahab",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:11,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"Sewa",
    description:"Sewa is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:12,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"Aswan",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:13,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"mina",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:14,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"city",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
  {
    id:15,
    img:require("../../../assets/images/luxor.jpeg"),
    name:"date",
    description:"Luxor is called the City of the Hundred Gates or the City of the Sun, previously known as Thebes. It is the capital of Egypt in the Pharaonic era    ",
    rate:3,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
        res_location:"Upper Level, Overseas Passenger Terminal, Circular Quay West, The Rocks, Sydney, New South Wales 2000 Australia",

      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  },
/*   {
    id:6,
    img:require("../../../assets/images/travel.jpg"),
    name:"country name",
    description:"country description",
    rate:4,
    review:2,
    resturant:[
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:1,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:2,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:4,
      },
      {
        res_img:require("../../../assets/images/resturantjpg.jpg"),
        res_title:"resturant title",
        res_description:"resturant description",
        rate:3,
      },
    ],
    hotels:[
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:1
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:2
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:4
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:3
      },
      {
        hotel_img:require("../../../assets/images/hotel.jpg"),
        htel_title:'hotel title',
        hotel_description:"hotel description",
        rate:5
      },
    ],
    places:[
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:1
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:2
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:3
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:4
      },
      {
        place_img:require("../../../assets/images/travel.jpg"),
        place_title:"place title",
        place_description:"place description",
        rate:5
      },
    ],
  }, */
]
const Countries = () => {
    const [Visibale, setVisibale] = useState(9)
    // const [item, setitem] = useState([])
    const navigate=useNavigate();
    const handlecontry=(psItem)=>{
      navigate('/contrydetails',{state:{contry:psItem}})
    }

    const  showMoreItems =() =>{
      setVisibale((prevValue)=> prevValue + 4)
    }



  return (
    <div className='countries-main'>
      <div className='showCountry-main'>

     {
            contries.slice(0,Visibale).map((item)=>{
              return <>
                <div className="contry-main" onClick={()=>handlecontry(item)}>
                  <div className="contry-img-main" >
                    <img style={{
                      width:'100%',
                      height:'100%'
                    }} src={item.img} alt="" />

                  </div>
                  <div className="contry-details-main">
                    <h1 className="contry-name-main">
                      {item.name}
                    </h1>
                    <div className="rate" style={{
                      marginBottom:'10px',
                      display:'flex',
                      alignItems:'center',
                      gap:'3px',
                    }}>
                    </div>
                  </div>
                </div>
              </>
            })
          }
                </div>

         {Visibale<=contries.length?<>
          <button className="load" onClick={showMoreItems}>Load More</button>

              </>: <button className={`btn ${Visibale>=contries.length? 'hidden' : ''}`} onClick={showMoreItems}>Load More</button>

            }

    </div>
  )
}

export default Countries
