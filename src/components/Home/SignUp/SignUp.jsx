import React from 'react'
import {useFormik} from 'formik'
import { Link } from 'react-router-dom';

// import * as Yup from 'yup'

export default function SignUp() {


    //Validation Form Register
    // let validationSchema=Yup.object({
    //     name:Yup.string().required('name is required').min(3,'minimum name is 3 letters').max(20,'maximum name is 10 letters'),
    //     email:Yup.string().required('email is required').email('email invalid'),
    //     password:Yup.string().required('password is required').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,"password must have a Number , UperCase , LowerCase and not less than 8 "),
    //     rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')],"not matches"),
    // })
    
    //Definition of variable For Form
     let formik= useFormik({
        initialValues:{
          name:'',
          email:'',
          password:'',
          rePassword:'',
        },
        // validationSchema,
        onSubmit:handelRegesiter
      });
    
    

    async function handelRegesiter (values){
        //Call APi
       console.log(values);
    }



    
    

    
    
    return<>  
    <div className="container shadow-lg rounded-5 w-50 mx-auto py-4">
        <h3>SignUp</h3>
        <form onSubmit={formik.handleSubmit}>

            <label htmlFor="name">Name</label>
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="text" className='form-control mb-2' name='name' id='name' value={formik.values.name}/>
            {/* {formik.errors.name && formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div>:null} */}

            <label htmlFor="email">Email</label>
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="email" className='form-control mb-2' name='email' id='email' value={formik.values.email}/>
            {/* {formik.errors.email && formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>:null} */}


            <label htmlFor="password">Password</label>
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password" className='form-control mb-2' name='password' id='password' value={formik.values.password}/>
            {/* {formik.errors.password && formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>:null} */}

            <label htmlFor="rePassword">Repassword</label>
            <input onBlur={formik.handleBlur}  onChange={formik.handleChange}  type="password" className='form-control mb-2' name='rePassword' id='rePassword' value={formik.values.rePassword}/>
            {/* {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger">{formik.errors.rePassword}</div>:null} */}

                <button type='submit' className='btn bg-main text-white'>Register</button>
                {/* disabled={!(formik.isValid &&formik.dirty)} */}
        </form>

        <div className="col-md-10 mx-auto mb-2">
<p  className='text-center text-muted m-3'>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" className='text-decoration-none text-primary'> Privacy Policy </a> and <a href="https://policies.google.com/terms"  className='text-decoration-none text-primary'> Terms of Service </a> apply.</p>
  <p className='text-center text-muted my-3'>Already a member?<Link className='text-decoration-none text-dark-main' to={'/login'}> Login <i className="so fa-solid fa-chevron-right fa-xs"></i></Link></p>
  </div>
    </div>
    </>
    }
    

