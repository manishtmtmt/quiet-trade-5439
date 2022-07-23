import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./SignUp.css";
import TextField from "@material-ui/core/TextField";
import { Text } from "@chakra-ui/react";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import { Checkbox } from "@chakra-ui/react";


function SignUp() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

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
    localStorage.setItem("signup", JSON.stringify(formData));
    alert("Signup Successfull");
    navigate("/login");
  };
  return (<>
    <div className="logo">
      <img src="https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001" alt="" />
      </div>
    <div>
      <div id="container">
        <Text fontSize="35">Create an account</Text>
        <form onSubmit={handleSubmit}>
          <div id="p1">
            <div className="first">
              <TextField
                onChange={handleChange}
                variant="outlined"
                id="name"
                type="text"
                label="First Name"
                autoFocus
                required
                fullWidth
              />
            </div>
            <br />
            <div className="second">
              <TextField
                onChange={handleChange}
                variant="outlined"
                id="lastname"
                type="text"
                label="Last Name"
                autoFocus
                required
                fullWidth
              />
            </div>
            <br />
          </div>

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
          <div id="p2">
            <br />
            <div className="third">
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
            </div>
            {/* <br />
            <div className="fourth">
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="confirmpass"
                type="password"
                label="Re-enter your password"
                autoFocus
              />
            </div>
            <br /> */}
          </div>

          {/* <TextField
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            id="mobile"
            type="number"
            label="Mobile Number"
            autoFocus
          /> */}
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

          <input id="btn" type="submit" value="Continue" />
           <br />
          <Text className="p1">Already have an account? <a href="">Sign in</a>
          </Text>
          <br />
          <Text className="p2">or continue with</Text>
          <br />
          <div className="icon">
          <AppleIcon />
          <FacebookIcon/>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
export default SignUp;
