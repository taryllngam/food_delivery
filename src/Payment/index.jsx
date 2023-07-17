import React, { useContext } from 'react';
import { usePaymentInputs } from 'react-payment-inputs';
import '../Payment/style.css'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcJcb, FaCcDiscover } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
import { FoodContext } from "../context/FoodContext";


export default function Payment() {
  const {  getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
  let { id } = useParams();
  const navigate = useNavigate();
	const {value} = useContext(FoodContext)
  const food =value.find((ele) => ele.id === id);

  return (
    <div className='dets'>
    <div className='details'>
        <div className='cards'>
        <h1>ENTER CARD DETAILS</h1>
        <div className='pays'>
        <FaCcVisa/>
        <FaCcMastercard/>
        <FaCcAmex/>
        <FaCcJcb />
        <FaCcDiscover />
        </div>
        </div>
        <div className='card-dets'>
        <span>CARD NUMBER</span>
      <input {...getCardNumberProps({  })}
         placeholder="0000 0000 0000 0000"
      />
      </div>
      <div className='card-dets'>
        <span>EXPIRY DATE</span>
      <input {...getExpiryDateProps({ })}  />
      </div>
      <div className='card-dets'>
      <span>CV</span> 
      <input {...getCVCProps({  })} />
      </div>
      <button  id='but1'    onClick={() => {
              navigate(`/billing/${id}`);
            }}>Submit</button>
    </div>
    <div>
      <h1>{food?.name}</h1>
    </div>
    </div>
  );
}