import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginAuth } from "../Redux/LoginAuth/action";
import TextField from "@material-ui/core/TextField";
import "./SignUp.css"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import { Text } from "@chakra-ui/react";

function Login() {
  const signupData = JSON.parse(localStorage.getItem("signup")) || null;

  const dispatch=useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    localStorage.setItem("login", JSON.stringify(formData));
    handleAuth(formData);
  };
  const handleAuth = (formData) => {
    if (formData.email === undefined && formData.pass === undefined)
    {
      alert("Please Give Proper Inputs");
    }
    else if (signupData !== null)
    {
      if(
        signupData.email === formData.email &&
        signupData.pass === formData.pass
      ){
        alert("Login Succesfull");
        localStorage.setItem("auth", JSON.stringify(true));
        dispatch(loginAuth(true));
        navigate("/");
      }
    }
    else
    {
      alert("Validation Failed. wrong credential");
    }
  };
  return (
    <>
      <div className="logo">
      <img src="https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001" alt="" />
      </div>

    <div id="container">

      <Text fontSize="35">Sign in</Text>
      <form onSubmit={handleSubmit}>
             <TextField
               onChange={handleChange}
               variant="outlined"
               required
               fullWidth
               id="email"
               type="email"
               label="yourname@example.com"
               autoFocus
        />
        <br />
        <br />

            <TextField
               onChange={handleChange}
               variant="outlined"
               required
               fullWidth
               id="pass"
               type="password"
               label="Password"
               autoFocus
              />
        <br />
        <br />
        <div className="checkbox">
            <Checkbox ><Text>This is a public or shared device</Text></Checkbox>
          </div>
         <br />
          <Text className="p">
            By creating an acount, i agree to the Travelocity{" "}
            <a href="">Terms and Conditions</a> and{" "}
            <a href="">Privacy Statement.</a>
          </Text>
          <br />
        <input id="btn" type="submit" value="Sign In" />
        <br />
        <br />
        <div className="p1">
        <a href="">Forgot password?</a>
        </div>

        <br />
        <div className="create_ac">
        <Text>Don't have an account?</Text>
        <Text
          id="button"
          onClick={() => {
            navigate("/signup");
          }}
          > Create one{" "}
        </Text>
          </div>
          <br />
          <Text className="p2">or continue with</Text>
          <br />
          <div className="icon">
          <AppleIcon />
          <FacebookIcon/>
          </div>

      </form>
      </div>
      </>
      );

}

export default Login;
