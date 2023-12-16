import React from "react";
import { useLocation, useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "./css/contrydetails.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Resturant from "./resturant/Resturant";
import Slider from "react-slick";
import Hotel from "./hotel/Hotel";
import Places from "./places/Places";
import { COLORS } from "../../../../constants";
const Contrydetails = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    slidesToShow: 3,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const location = useLocation();
  const { state } = location;
  console.log(state);
  const { contry } = state;
  const navigate = useNavigate();
  console.log(location.state.contry);
  const handleresturant = () => {
    navigate("/moreres", { state: { contryid: contry.id } });
  };

  const handleplaces = () => {
    navigate("/morpls", { state: { contryid: contry.id } });
  };

  const handlehotels = () => {
    navigate("/morhots", { state: { contryid: contry.id } });
  };
  return (
    <>
      <div
        className="contry-image"
        style={{
          height: "100vh",
          marginBottom: "40px",
          position: "relative",
        }}
      >
        <img
          src={contry.img}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
        />
        <div className="contry-det" style={{}}>
          <h1>{contry.name}</h1>
          <h6>{contry.description}</h6>
        </div>
      </div>
      <div className="">
        <div className="container shadow-lg p-3 mb-5 bg-white rounded-5">
          <div className="resturants-div">
            <div className="resturants-div-right">
              <h2>Eat the most delicious foods</h2>
            </div>
            <div className="resturants-div-left">
              <div className="row justify-content-center pb-2">
                <div className="col-md-6">
                  <h3 style={{ textAlign: "left" }}>resturants</h3>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn text-white btn-yellow" onClick={handleresturant}>
                    more
                  </button>
                </div>
              </div>
              <div className="resturants">
                <div>
                  <Slider {...settings}>
                    {contry?.resturant?.map((res, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <Resturant res={res} />
                        </SwiperSlide>
                      );
                    })}
                  </Slider>
                </div>
                <div className="placebutton"></div>
              </div>
            </div>
          </div>
          <div className="hotels-div">
            <div className="hotels-div-right">
              <h2 className="pt-2">Enjoy the stay</h2>

              <div className="row justify-content-center pb-2">
                <div className="col-md-6">
                  <h3 style={{ textAlign: "left" }}>Hotels</h3>
                </div>
                <div className="col-md-6 text-end">
                  <button className="btn text-white btn-yellow " onClick={handlehotels}>
                    more
                  </button>
                </div>
              </div>
            </div>
            <div className="hotels-div-left">
              <div className="hotels">
                <Slider {...settings}>
                  {contry?.hotels?.map((res, index) => {
                    return <Hotel res={res} />;
                  })}
                </Slider>
                <div
                  className="placebutton"
                  style={{
                    textAlign: "center",
                    margin: "20px 0px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="places-div">
            <div className="places-div-right">
              <h2 className="py-2">Visit the best places</h2>
            </div>

            <div className="row justify-content-center pb-2">
              <div className="col-md-6">
                <h3 style={{ textAlign: "left" }}>Places</h3>
              </div>
              <div className="col-md-6 text-end">
                <button className="btn text-white btn-yellow" onClick={handleplaces}>
                  more
                </button>
              </div>
            </div>
            <div className="places-div-left">
              <div className="places">
                <Slider {...settings}>
                  {contry?.places?.map((res, index) => {
                    return <Places res={res} />;
                  })}
                </Slider>
                <div
                  className="placebutton"
                  style={{
                    textAlign: "center",
                    margin: "20px 0px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contrydetails;
