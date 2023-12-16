import React from 'react'
import { useLocation } from 'react-router'
import './placedet.css'
import Slider from "react-slick";
import slide1 from '../../assets/images/121.jpg'
import slide2 from '../../assets/images/122.png'
import slide3 from '../../assets/images/123.jpg'
import slide4 from '../../assets/images/124.jpg'
import slide5 from '../../assets/images/125.jpg'

const Placedet = () => {

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style , margin:10 , background:'#303030' ,borderRadius:10 }}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 0,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SampleNextArrow />,
};
  const location = useLocation();
  console.log("hello", location.state)
  const { res_img, res_title, res_description, rate ,place_description ,place_img ,place_title ,hotel_description ,hotel_img ,htel_title} = location.state.item
  return (
    <>
    <div className="container shadow-lg p-3 mb-5 bg-white rounded-5">
      <div className="row py-5 justify-content-center align-content-center">
        <div className="col-md-7 ">
        <Slider {...settings}>
      <div>
        <img src={slide1} alt="" />
      </div>
      <div>
        <img src={slide2} alt="" />
      </div>
      <div>
        <img src={slide3} alt="" />
      </div>
      <div>
        <img src={slide4} alt="" />
      </div>
      <div>
        <img src={slide5} alt="" />
      </div>

    </Slider>

{/* {res_img?        <img className='w-100' src={res_img} alt="" />
:null }{place_img? <img className='w-100' src={place_img} alt="" />:<img className='w-100' src={hotel_img} alt="" />}      */}
   </div>
        <div className="col-md-5 py-xl-5 my-xl-5 py-lg-3 my-lg-3">
        <h2 className='h3'>{place_title}</h2>
          <p style={{textAlign:'left'}}>{place_description}</p>
          <div className="rate">
          <span>Rate: </span>
          {
            [0, 1, 2, 3, 4].map((starind, index) => {
              return (
                <i key={index} className="fa-solid fa-star" style={{
                  color: starind < rate ? '#f8c907' : '#CCC'
                }} ></i>
              )
            })
          }
                    <div className="services pt-2">
          <h4>ratings Services</h4>
          <span className='text-start'><i className="fa-solid fa-utensils"></i> food: </span>
          {
                  [0, 1, 2, 3, 4].map((starind, index) => {
                    return (
                      <i key={index} className="fa-solid fa-star" style={{
                        color: starind < rate ? '#f8c907' : '#CCC'
                      }} ></i>
                    )
                  })
                }
          </div>

                    <div className="services pt-2">
                    <span><i className="fa-solid fa-bell-concierge"></i> service :</span>
                    {
                  [0, 1, 2, 3, 4].map((starind, index) => {
                    return (
                      <i key={index} className="fa-solid fa-star" style={{
                        color: starind < rate ? '#f8c907' : '#ccc'
                      }} ></i>
                    )
                  })
                }
          </div>
          <div className="services pt-2">
                <span><i class="fa-solid fa-wallet"></i> value: </span>
          {
                  [0, 1, 2, 3, 4].map((starind, index) => {
                    return (
                      <i key={index} className="fa-solid fa-star" style={{
                        color: starind < rate ? '#f8c907' : '#CCC'
                      }} ></i>
                    )
                  })
                }
          </div>
          </div>
          </div>


        </div>
      </div>



    </>
  )
}

export default Placedet
