import React from 'react'
import './Contact.css'
import cover1 from '../../assets/images/5.png'
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer';


function Contact() {
  return <>
  <Navbar/>
     <div className="container_10 p-0">
    <div className="row g-0">
      <div className="col-md-8 col-12 justify-content-end">
        <div className="contact_backg_blu">
          <div className="row justify-content-md-end justify-content-center">
            <div className="col-12 pt-lg-5 pt-md-5 pt-3 pb-lg-5 pb-0 form_all ">
              <div className="form p-lg-0 p-5">
                <div className="col-12 text-center">
                  <h2 className="titel-page pb-5">Worlds Learding Low Consultency Agency!</h2>
                </div>
                <form>
                  <div className="row justify-content-center pb-lg-5 pb-4 mb-lg-3 mb-0 g-0">
                    <div className="col-lg-4 col-md-6 col-12 pb-lg-0 pb-4 pe-md-4">
                      <div className="form-floating">
                        <input type="name" className="form-control for_name" id="floatingInput" placeholder="123-45-678"/>
                        <label for="floatingInput">Name</label>
                        <samp className="samp"></samp>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ps-md-4">
                      <div className="form-floating">
                        <input type="Phon" className="form-control for_phon" id="floatingInput" placeholder="char"/>
                        <label for="floatingInput">Phone</label>
                        <samp className="samp"></samp>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center pb-lg-5 pb-4 mb-lg-3 mb-0 g-0">
                    <div className="col-lg-4 col-md-6 col-12 pb-lg-0 pb-4 pe-md-4">
                      <div className="form-floating">
                        <select className="form-select for_select" id="floatingSelect"
                          aria-label="Floating label select example">
                          <option selected>Health Low</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <samp className="samp"></samp>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ps-md-4">
                      <div className="form-floating">
                        <input type="email" className="form-control for_email" id="floatingInput"
                          placeholder="name@example.com"/>
                        <label for="floatingInput">Email</label>
                        <samp className="samp"></samp>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-lg-end justify-content-center pb-lg-5 pb-4 mb-lg-3 mb-0 g-0">
                    <div className="col-lg-8 col-md-12">
                      <div className="form-floating">
                        <textarea className="form-control" id="message_hight" placeholder="Leave a comment here"
                          ></textarea>
                        <label for="floatingTextarea2">Message</label>
                      </div>
                    </div>
                    <div className="col-2 ps-5  d-lg-block d-none">
                      <div className="div_desin_blu"></div>
                    </div>
                  </div>
                  <div className="row justify-content-center mb-4">
                    <div className="col-md-6 col-8">
                      <div className="form-floating">
                        <input type="button" className="form-control submit_butt validation" id="floatingInput"
                          value="Submit Now"/>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-12">
        <div className="row g-0 ">
          <div className="col-md-9 col-12 me-auto">
            <div className="all_icon_contact">
              <div className="icon_contact text-center">
                <div className="row justify-content-end pt-5">
                  <div className="col-10">
                    <h4 className="color_brw">CONTACT US</h4>
                  </div>
                </div>
                <div className="row justify-content-center pt-5">
                  <div className="col-10 pt-5">
                    <a className="color_whit"
                      href="https://www.google.com/maps/place/%D8%A7%D9%84%D8%B4%D9%84%D9%82%D8%A7%D9%86%D9%89-+SHALAKANY%E2%80%AD/@30.0660892,31.2201417,17z/data=!3m1!4b1!4m5!3m4!1s0x145841160757e7f5:0xb46cbf3388082ac3!8m2!3d30.0661103!4d31.2201375"
                      target="_blank"><i className="fa-solid fa-location-dot"></i></a>
                    <h6 className="color_whit pt-2">29 Farm Street, Mayfair, London, England, W1J 5RL</h6>
                  </div>
                </div>
                <div className="row d-lg-block d-none">
                  <div className="col-2 pt-3">
                    <div className="div_desin_whit"> </div>
                  </div>
                </div>
                <div className="row justify-content-center pt-lg-0 pt-5">
                  <div className="col-10">
                    <a className="color_whit" href="mailto:support@legamart.com"><i className="fa-solid fa-envelope"></i></a>
                    <h6 className="color_whit pt-2">support@legamart.com</h6>
                  </div>
                </div>
                <div className="row justify-content-center pt-5 ">
                  <div className="col-10">
                    <a className="color_whit" href="tel:+44 20 8144 4882"><i className="fa-solid fa-phone"></i></a>
                    <h6 className="color_whit pt-2">+44 20 8144 4882</h6>
                  </div>
                </div>
              </div>
              <img src={cover1} alt="20" width="100%" height="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>

  </>
}

export default Contact