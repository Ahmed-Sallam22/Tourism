import React from 'react'
import Navbar from '../NavBar/Navbar'
import banner1 from '../../banner/2.png'
import './About.css'
import photo1 from '../../assets/images/egplc6.jpg'

function About() {
  return <>
  <Navbar/>
    <div className="container py-5 main-about">
        <div className="shadow-lg rounded-5  pt-5">
          <div className="body w-75 mx-auto">
          <div className="text-about pb-5 text-center ">
            <h2 className='fw-bold'>OUR STORY</h2>
            <p className='text-black px-5 pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis quos eos, amet impedit nisi recusandae minima laboriosam. Expedita et animi eveniet delectus harum magnam alias veniam nam, debitis obcaecati. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint numquam possimus nobis ut voluptatum eaque laboriosam, quibusdam non nulla, necessitatibus praesentium. Quisquam itaque amet doloremque ipsum eos assumenda aliquid fuga.</p>
            <div className="img-about mb-5 ">
            <img src={banner1} className='w-100' alt="" />
              <div className="layer-img"></div>
            </div>

              {/* <div className="team pt-5 pb-4 text-center">
            <h2 className='fw-bold'>TEAM MEMBER</h2>
           
              </div>
              <div className="row">
              <div className="col-lg-4 img-difine">
                <div className="img-profile">
                <img src={photo1} className='w-100 rounded-2' alt="" />
                <div className="text-img">
                  <h4>Ahmed Sallam</h4>
                  <ul className='decor list-unstyled'>
                  <li><i className="fa-brands fa-facebook-f fa-xl"></i></li>
                  <li><i className="fa-brands fa-twitter fa-xl"></i></li>
                  <li><i className="fa-brands fa-instagram fa-xl"></i></li>
                  </ul>
                </div>
                </div>
               

              </div>
              <div className="col-lg-4 img-difine">
              <div className="img-profile">
                <img src={photo1} className='w-100 rounded-2' alt="" />
                <div className="text-img rounded-2">
                  <h4>Ahmed Sallam</h4>
                  <ul className='decor list-unstyled'>
                  <li><i className="fa-brands fa-facebook-f fa-xl"></i></li>
                  <li><i className="fa-brands fa-twitter fa-xl"></i></li>
                  <li><i className="fa-brands fa-instagram fa-xl"></i></li>
                  </ul>
                </div>
                </div>              </div>



              <div className="col-lg-4 hidd position-relative">
                <img src={photo1} className='w-100 rounded-5 ' alt="" />
                <div className="layer-img2 rounded-5"></div>

              </div>
            </div> */}

<div className="row text-center pt-5 pb-2  Our_st_text">
            <h2 className='fw-bolder'>team members</h2>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo1} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">SomeOne Famous</h4>
                            <h5>Creative Desinger</h5>

                            <ul className="social-icons d-flex justify-content-center">
                                <li >
                                    <a href="#">
                                        <span className="fab fa-facebook"></span>
                                    </a>
                                </li>
                                <li >
                                    <a href="#">
                                        <span className="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fab fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo1} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">SomeOne Famous</h4>
                            <h5>Creative Desinger</h5>

                            <ul className="social-icons d-flex justify-content-center">
                                <li>
                                    <a href="#">
                                        <span className="fab fa-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fab fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="card p-0">
                        <div className="card-image">
                            <img src={photo1} alt=""/>
                        </div>
                        <div className="card-content d-flex flex-column align-items-center">
                            <h4 className="pt-2">SomeOne Famous</h4>
                            <h5>Creative Desinger</h5>

                            <ul className="social-icons d-flex justify-content-center">
                                <li>
                                    <a href="#">
                                        <span className="fab fa-facebook"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fab fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fab fa-instagram"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>

          </div>
          
          </div>
         

        </div>
    </div>
  </>
}

export default About