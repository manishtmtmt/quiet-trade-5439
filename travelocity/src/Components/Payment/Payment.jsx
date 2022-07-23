import React from 'react'
import FinalSubmit from './FinalSubmit'
import PaymentForm from './PaymentForm'
import styled from "styled-components";
import { PriceDetail } from './PriceDetail';
import Pic from './Pic';

const Payment = () => {
  return (

    <div>
    <Wrapper>
    {/* <div>Payment</div> */}

    <div>
       <PaymentForm/>
       <FinalSubmit/>
    </div>

    <div className="right" >  
<div className="pic" ><Pic/></div> <br />

<div className="sep" ></div>

    <PriceDetail/>
    </div>

    </Wrapper>


     </div>
  )
}

export default Payment


const  Wrapper = styled.div`
border: 1px solid red;
display: flex;
margin: auto;
width: 80%;
justify-content: space-between;

.right {
  border: 1px solid green;
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