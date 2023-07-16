import React, { useState } from 'react';
import { useFormik } from 'formik';
import '../Billing-form/style.css'
import Modal from '../Modal';
import Payment from '../Payment';



export default function Billing(){
	const [visible, setVisible] = useState(false)
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
     validate:(values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
      }
    
      if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less';
      }
    
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
    
      return errors;
    },
		
    onSubmit: (values) => {
        // alert(JSON.stringify(values, null, 2));
        localStorage.setItem("values", JSON.stringify(values));
				setVisible(!visible)
      },
    })
  return (
    <div className='data'>
			{visible && <Modal visible={visible} setVisible={setVisible} />}
    <form onSubmit={formik.handleSubmit}>
        <div className='headtag'>
    <h1>KINDLY FILL IN YOUR INFORMATION TO CONFIRM PURCHASE</h1>
    </div>

        <div className='display2'>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder='first name...'

        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
      />
      </div>

      <div className='display2'>
      <span>Last Name</span>
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder='last name...'
			
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastName}
      />
      </div>

      <div className='display2'>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder='email...'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />

      </div>

      <div className='display2'>
      <label htmlFor="firstName">Delivery Address</label>
      <input
        id="address"
        name="address"
        type="text"
        placeholder='address...'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.address}
      />
      </div>



      <button id='but1' type="submit" className='buton'>Submit</button>
    </form>
    </div>
  );
};

