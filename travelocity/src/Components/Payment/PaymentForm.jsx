import React, { useState } from "react";
import styled from "styled-components";
import { Box, Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// const useStyles = makeStyles((theme) => ({
//     icon: {
//         marginRight: "10px",
//         marginLeft: "20px",
//     },

//     formControl: {
//         margin: theme.spacing(1),
//         minWidth: 120,
//     },
// }));

const initialState = {
  name: "",
  card: "",
  month: "",
  year: "",
  cvv: "",
  zip: "",
};

const PaymentForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // const classes = useStyles();

  return (
    <Wrapper>
      {/* <div>PaymentForm</div> */}

      <div className="info">
        {/* <CreditCardIcon /> */}
        <div className="message">
          <CheckIcon
          //   className={classes.icon}
          />
          <p>We use secure transmission </p>
        </div>

        <div> {"     "} </div>
        {"   "}

        <div className="message">
          <CheckIcon
          //   className={classes.icon}
          />
          <p>We protect your personal information</p>
        </div>
      </div>

      <div className="images">
        <img
          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_master_card.svg"
          alt=""
        />
        <img
          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_american_express.svg"
          alt=""
        />
        <img
          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_china_union_pay.svg"
          alt=""
        />
        <img
          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_diners_club.svg"
          alt=""
        />
        <img
          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_discover.svg"
          alt=""
        />
        <img
          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_jcb.svg"
          alt=""
        />
        <img
          src="https://a.travel-assets.com/dms-svg/payments/cards-cc_visa.svg"
          alt=""
        />
      </div>

      {/* <form action="">
        <label for="fname">First name:</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <input type="submit" v
        alue="Submit" />
      </form> */}

      {/* <br />
<form> */}
      {/* <label>
    Name:
    <input type="text" name="name" backgroundColor="white" />
  </label>
  <input type="submit" value="Submit" /> */}

      {/* <Input type='email' background="white" border="5px solid black" />
</form> */}

      <br />
      <div className="form">
        <FormControl bg="white">
          <FormLabel bg="white" >Name on Card*</FormLabel>
          <Input type="email" width="100%" />

          <FormLabel bg="white">Debit/Credit card number*</FormLabel>
          <Input type="email" width="100%" />
        </FormControl>

        <FormLabel bg="white">Expiration date*</FormLabel>
        <Box display="flex"  bg="white">
          <Select placeholder="Month" bg="white"  >
            <option value="01-Jan"> 01-Jan </option>
            <option value="02-Feb">02-Feb</option>
            <option value="03-Mar">03-Mar</option>
            <option value="03-Mar">04-Apr</option>
            <option value="03-Mar">05-May</option>
            <option value="03-Mar">06-Jun</option>
            <option value="03-Mar">07-Jul</option>
            <option value="03-Mar">08-Aug</option>
            <option value="03-Mar">09-Sep</option>
            <option value="03-Mar">10-Oct</option>
            <option value="03-Mar">11-Nov</option>
            <option value="03-Mar">12-Dec</option>
          </Select>

          <Select placeholder="Year" bg="white">
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2024">2025</option>
            <option value="2024">2026</option>
            <option value="2024">2027</option>
            <option value="2024">2028</option>
            <option value="2024">2029</option>
            <option value="2024">2030</option>
          </Select>
        </Box>

        <FormLabel  bg="white">Security code*</FormLabel>
        <Input type="number" width="50%" bg="white" />

        <FormLabel bg="white">Billing ZIP code*</FormLabel>
        <Input type="number" width="70%"  bg="white"/>
      </div>
    </Wrapper>
  );
};

export default PaymentForm;

const Wrapper = styled.div`
  border: 4px solid blue;
  background: white;
  //   color: red;
  width: 67%;
  margin: 40px auto;
  padding: 15px;

  .images {
    background: white;

    display: flex;
  }

  .images img {
    background: white;

    width: 50px;
  }

  //   .name {
  //     width: 60%;
  //     height: 44px;
  //     margin-top: 20px;
  //     margin-bottom: 20px;
  //   }

  form {
    background: red;
    // background-color: white;

    // display: flex;
    // flex-direction: column;
    // border: 1px solid black
  }

  //   .code {
  //     display: grid;
  //     grid-template-columns: 20% 20%;
  //     grid-gap: 10px;
  //   }

  //   .code-number {
  //     margin: 20px 0;
  //   }

  .info {
    display: flex;
    background: white;

    align-items: center;
    // justify-content: space-between;
    // margin:10px;
    padding: 10px;
  }

  .message {
    background: white;

    display: flex;
    align-items: center;
    color: green;
    font-size: 0.8rem;
  }
`;
