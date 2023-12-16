import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

export default function Footer() {
  return <>
   <section class="footer">
    <div class="container-footer">
      <div class="footer-logo Links">
        <img src={logo} alt=""/>
      </div>
      <div class="Links">
        <h2>QUICK LINK</h2>
        <a href="">Things</a>
        <a href="">Places</a>
      </div>
      <div class="Links">
        <h2>OUR SUPPORT</h2>
        <Link to={'/About'}>About Us</Link>
        <Link to={'/Contact'}>Contact Us</Link>
      </div>
      <div class="Links">
        <h2>NEWSLATTER</h2>
        <p>Subscibe now to get daily updates</p>
        <div class="send-box">
            <input type="email" placeholder="Email Address"/>
            <button>Send</button>
        </div>
    </div> 
    </div>
    <div class="social">
      <ul>

      <li className='social-list text-white'>
        <i class="fa-brands fa-twitter "></i>
      </li>
      <li className='social-list text-white'>
        <i class="fa-brands fa-facebook-f" ></i>
      </li>     
      <li className='social-list text-white'>
        <i class="fa-brands fa-instagram"></i>
      </li>
      <li className='social-list text-white'>
        <i class="fa-brands fa-linkedin-in"></i>
      </li>
      </ul>

    </div>
    <p class="copyright">Copyright ©2023 All rights reserved | THis website made by my TEAM</p>
  </section>
  {/* <footer>
    <div className="container">
    <div className="row text-start">
    <div className="col-md-3">
       <img src={logo} className='w-50' alt="" />
      </div>
      <div className="col-md-3">
        <h5>quick links</h5>
        <div className="colu">
        <span>Things</span>
        </div>
        <div className="colu">
        <span>Places</span>
        </div>
      </div>
      <div className="col-md-3">
      <h5>Our support</h5>
      <div className="colu">
      <span>About Us</span>
        </div>
      
        <div className="colu">
        <span>Contact US</span>
        </div>
      </div>


      <div className="col-md-3 ">
      <h5>Newslatter</h5>

          <div className="colu pb-2">
      <span>subscribe now to get daily updates</span>
        </div>
      
        <div className="colu-e g-0 p-0 m-0">
        <input type="email" placeholder='Email Address' />
        <button >Send</button>
        </div>
      </div>
     
    </div>
    </div>
    <ul className='social-icon pb-3'>
        <li ><i className="fa-brands fa-facebook-f"></i></li>
        <li><i className="fa-brands fa-twitter"></i></li>
        <li><i className="fa-brands fa-linkedin"></i></li>
        <li><i className="fa-brands fa-instagram"></i></li>
    </ul>
    <p className='text-footer'>Copyright &copy; 2023 All rights reserved | This website made by TEAM</p>

  </footer> */}
  </>
}
