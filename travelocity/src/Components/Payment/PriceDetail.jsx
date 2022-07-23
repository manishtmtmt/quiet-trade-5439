// import { Divider } from "@material-ui/core";
import { Divider } from "@chakra-ui/react";
import styled from "styled-components";
import { LoadData } from "../../Redux/AppReducer/LocalStorage";

const Wrapper = styled.div`
  background: white;
  width: 80%;
  margin: 40px auto;
  padding: 15px;
  height: fit-content;

  .title {
    font-weight: 700;
    font-size: 1.4rem;
    color: #1f1e1e;
  }

  .room-detail,
  .taxes,
  .total {
    display: flex;
    justify-content: space-between;
    color: #111111;
  }

  .total {
    font-weight: 700;
    font-size: 1.2rem;
  }

  .save {
    width: 70%;
    padding: 3px 8px;
    border-radius: 10px;
    color: white;
    background: green;
    text-align: center;
    margin-left: 25px;
  }

  .coupon {
    color: blue;
    font-size: 0.8rem;
  }
`;

export const PriceDetail = () => {
  const data = LoadData("paymentData")
  const taxes = 29;
    return (

        // <div>price</div>


        <Wrapper>
            <p className="title">Price Details</p>
            <Divider />
            <div className="room-detail">
                <p>1 room x 1 night</p>
                <p>{data.price}</p>
            </div>
            <div className="save">You saved 10%</div>
            <div className="taxes">
                <p>Taxes and fees</p>
                <p>${taxes}</p>
            </div>
            {/* <Divider /> */}
            <div className="total">
                <p>Total</p>
                <p>${data.price + taxes}</p>
            </div>
            <p className="coupon">Use a coupon, credit, or promotion code</p>
        </Wrapper>
    );
};
