import React from 'react'
import FinalSubmit from './FinalSubmit'
import PaymentForm from './PaymentForm'
import styled from "styled-components";
import { PriceDetail } from './PriceDetail';
import Pic from './Pic';
import { LoadData } from '../../Redux/AppReducer/LocalStorage';

const Payment = () => {
  const data = LoadData("paymentData")
  return (

    <div>
    <Wrapper>
    {/* <div>Payment</div> */}

    <div>
       <PaymentForm/>
       <FinalSubmit/>
    </div>

    <div className="right" >  
<div className="pic" ><Pic data={data} /></div> <br />

<div className="sep" ></div>

    <PriceDetail/>
    </div>

    </Wrapper>


     </div>
  )
}

export default Payment


const  Wrapper = styled.div`
display: flex;
margin: auto;
width: 80%;
justify-content: space-between;

.right {
width: 100%;
}

.sep{
  // border: 1px solid green;
 color: white;
 background-color: white;
  height: 100px;
}

.pic{
  // height: 50px;
  margin: 10px
}
`