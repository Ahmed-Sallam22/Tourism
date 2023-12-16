import React from 'react'
import {useFormik} from 'formik'
// import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import './login.css'
import UilReact from '@iconscout/react-unicons/icons/uil-react'

export default function Login({saveUserData}) {
    //variable for toast



    //Validation Form Register
    // let validationSchema=Yup.object({
    //     email:Yup.string().required('email is required').email('email invalid'),
    //     password:Yup.string().required('password is required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"password must have a Number , UperCase , LowerCase and not less than 8 "),
    // })

    //Definition of variable For Form
    let formik= useFormik({
        initialValues:{
          email:'',
          password:'',
        },
        // validationSchema,
        onSubmit:handelLogin
    });





    async function handelLogin (values){
        console.log(values);
        //Call APi
    }

    return<>

	 <div class="section logsign">
		<div class="container">
			<div class="row full-height justify-content-center">
				<div class="col-12 text-center align-self-center py-5">
					<div class="section pb-5 pt-5 pt-sm-2 text-center">
						<h6 class="mb-0 pb-3"><span >Log In </span><span>Sign Up</span></h6>
			          	<input class="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
						
			            <label for="reg-log"></label>
						<div class="card-3d-wrap mx-auto">
							<div class="card-3d-wrapper">
								<div class="card-front">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3" style={{color:'white'}}>Log In</h4>
											<div class="form-group">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<buuton href="#" class="btns mt-4">submit</buuton>
                            				<p class="mb-0 mt-4 text-center"><a href="#0" class="link">Forgot your password?</a></p>
				      					</div>
			      					</div>
			      				</div>
								<div class="card-back">
									<div class="center-wrap">
										<div class="section text-center">
											<h4 class="mb-4 pb-3" style={{color:'white'}}>Sign Up</h4>
											<div class="form-group">
												<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
												<i class="input-icon uil uil-user"></i>
											</div>
											<div class="form-group mt-2">
												<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
												<i class="input-icon uil uil-at"></i>
											</div>
											<div class="form-group mt-2">
												<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
												<i class="input-icon uil uil-lock-alt"></i>
											</div>
											<buuton href="#" class="btns mt-4">submit</buuton>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div> 






{/*     <div className="container shadow-lg rounded-5 w-50 mx-auto py-4 login">
        <h3 style={{
          textAlign:'center'
        }}>Login Now</h3>
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="email">Email</label>
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="email" className='form-control mb-2' name='email' id='email' value={formik.values.email}/>
            {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null}


            <label htmlFor="password">Password</label>
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password" className='form-control mb-2' name='password' id='password' value={formik.values.password}/>
            {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:null}
                    <button type='submit'  className='btn bg-main text-white'>Login</button>

        </form>

        <div className="col-md-10 mx-auto mb-2">
  <p className='text-center text-muted my-3'>Don't have an account?<Link className='text-decoration-none text-dark-main' to={'/register'}> Register<i className="so fa-solid fa-chevron-right fa-xs"></i></Link></p>
  </div>
    </div> */}
    </>
    }


