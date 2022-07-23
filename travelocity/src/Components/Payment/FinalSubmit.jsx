import React from "react";
import styled from "styled-components";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { CheckIcon, LockIcon } from "@chakra-ui/icons";

const FinalSubmit = () => {
  return (
    // <div>FinalSubmit</div>

    <Wrapper>
      <p className="title">Important information about your booking</p>
      <ul className="charges">
        <li>
          This rate is non-refundable. If you change or cancel your booking you
          will not get a refund or credit to use for a future stay. This policy
          will apply regardless of COVID-19, subject to any local consumer laws.
        </li>
        {/* <br /> */}
        <li>No refunds will be issued for late check-in or early check-out.</li>
        <li>Stay extensions require a new reservation.</li>
        <li>Front desk staff will greet guests on arrival.</li>
      </ul>
      <br />
      <p className="charges">
        By clicking on the button below, I acknowledge that I have reviewed the
        Privacy Statement Opens in a new window. and Government Travel Advice
        Opens in a new window. and have reviewed and accept the Rules &
        Restrictions Opens in a new window. and Terms of Use Opens in a new
        window..
      </p>

      <div className="info">
        <CheckIcon />
        {/* <p>Change of plans? No problem. You can cancel for free</p> */}
      </div>

      <br />
      <Button 
    //   className={classes.button} 
    //   onClick={successPayment}
    backgroundColor={"green"}
      >Complete Booking</Button>

      <br />
      <br />
      <div className="terms">
        <LockIcon />
        <p>
          We use secure transmission and encrypted storage to protect your
          personal information.
        </p>
      </div>
      <p className="terms">
        This payment will be processed in the U.S. This does not apply when the
        travel provider (airline/hotel/rail, etc.) processes your payment.
      </p>
    </Wrapper>
  );
};

export default FinalSubmit;

const Wrapper = styled.div`
  background: white;
  width: 75%;
  margin: 40px auto;
  padding: 15px;

  .title {
    font-weight: 700;
    color: #1f1e1e;
  }

  .charges {
    font-size: 0.85rem;
  }

  .info {
    display: flex;
    align-items: center;
    color: green;
    font-size: 0.85rem;
  }

  .terms {
    display: flex;
    align-items: center;
    color: grey;
    font-size: 0.85rem;
  }
`;
