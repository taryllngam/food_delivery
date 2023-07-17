import { Formik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import "../SignUp/style.css"


const SignUp = () => { 
  const navigate = useNavigate()   

  const convert2base64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };


  const uploadImage = async (event) => {
    const file = event.target.files[0];
    const base64 = await convert2base64(file);
    console.log(base64);
  }
  
return (
  
  <div  className='big-container'>
 
    <Formik
      initialValues={{ email: '', password: '', firstName: '', lastName: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            localStorage.setItem('userInfo', JSON.stringify(values));
            // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          if(values.isAdmin){
            navigate('/admin')
            
          }
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <div>
          <h1>Signup And Take Control Of Your Menu!</h1>
          </div>
          <div>
          <input
              type="file"
              id="image"
              name="image"
              className="fileupload"
              onChange={(e) => uploadImage(e)}
              placeholder="Product Image"
            />
          </div>
          <div className='display2'>
            <span>FirstName</span>
            <input 
            type="firstName"  
            name="firstName"  
            onChange={handleChange}
            value={values.firstName}/>
            </div>

            <div className='display2'>
            <span>lastName</span>
            <input 
            type="lastName"
            name="lastName"  
            onChange={handleChange}
            value={values.lastName}/>
            </div>

            <div className='display2'>
            <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          </div>

          <div className='display2'>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          </div>
          <input type="checkbox" title='check to become admin' name='isAdmin' value={values.isAdmin} onChange={handleChange} />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
)
};

export default SignUp;