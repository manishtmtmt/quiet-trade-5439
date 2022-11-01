import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginAuth } from "../Redux/AuthReducer/action";
import TextField from "@material-ui/core/TextField";
import "./SignUp.css";
import { Box, Checkbox } from "@chakra-ui/react"; //CheckboxGroup deleted from here
import { Text } from "@chakra-ui/react";

// import FacebookIcon from "@material-ui/icons/Facebook";
// import AppleIcon from "@material-ui/icons/Apple";

// changed normal function to arrow function
const Login = () => {
  const location = useLocation();

  const comingFrom = location.state?.from?.pathname || "/";

  console.log(location);

  const signupData = JSON.parse(localStorage.getItem("signup")) || null; // getting the signup details from the localStorage for comparing

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  // function is for onChanging input feilds
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", JSON.stringify(formData));
    handleAuth(formData);
  };

  const handleAuth = (formData) => {
    if (formData.email === undefined && formData.pass === undefined) {
      alert("Please Give Proper Inputs");
    } else if (signupData !== null) {
      if (
        signupData.email === formData.email &&
        signupData.pass === formData.pass
      ) {
        alert("Login Succesfull");
        localStorage.setItem("auth", JSON.stringify(true));
        dispatch(loginAuth(true));
        navigate(comingFrom, { replace: true });
      } else {
        alert("Validation Failed. wrong credential");
      }
    } else {
      alert("Validation Failed. wrong credential");
    }
  };

  return (
    <>
      <Box className="logo">
        <img
          src="https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001"
          alt=""
        />
      </Box>

      <div id="container">
        {/* fontSize changed 35 to 25 */}
        <Text fontSize="25">Sign in</Text>

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
            <Checkbox>
              <Text>This is a public or shared device</Text>
            </Checkbox>
          </div>
          <br />
          <Text className="p">
            By creating an acount, i agree to the Travelocity{" "}
            <b>Terms and Conditions</b> and <b>Privacy Statement.</b>
          </Text>
          <br />
          <input id="btn" type="submit" value="Sign In" />
          <br />
          <br />
          <div className="p1">
            <Text color="blue">Forgot password?</Text>
          </div>

          <br />
          <div className="create_ac">
            <Text>Don't have an account?</Text>
            <Text
              id="button"
              onClick={() => {
                navigate("/signup");
              }}
              _hover={{ cursor: "pointer" }} // add hover effect
            >
              Create one{" "}
            </Text>
          </div>

          {/* <Text className="p2">or continue with</Text>
          <br /> */}
          {/* <div className="icon">
            <AppleIcon />
            <FacebookIcon />
          </div> */}
        </form>
      </div>
    </>
  );
};

export default Login;
