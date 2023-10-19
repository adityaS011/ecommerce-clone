import React, { useState, useContext, useEffect } from "react";
import {
  // Dialog,
  Box,
  styled,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import { authenticateSignup, authenticateLogin } from "../../service/api";
import { DataContext } from "../../context/DataProvider";
import Contact from "../home/Contact";
import { useNavigate } from "react-router-dom";

// const Component = styled(Box)`
//   height: 100vh;
//   width: 100vh;
// `;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 600px;
  width: 350px;
  padding: 40px 30px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 500;
  }
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled(Box)`
  height: 600px;
  width: 350px;
  display: flex;
  flex-direction: column;
  padding: 25px 35px;

  flex: 1;
  & > div,
  & > button,
  p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;
const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = () => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const { setAccount } = useContext(DataContext);
  const navigate = useNavigate();

  const handleWindowResize = () => {
    // Check the window width and set isMobileView accordingly
    setIsMobileView(window.innerWidth <= 768); // You can adjust the width as needed
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Call initially to set isMobileView

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // const handleClose = () => {
  //   toggleAccount(accountInitialValues.login);
  //   window.location = "/";
  //   setError(false);
  // };
  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };
  const toggleLogin = () => {
    toggleAccount(accountInitialValues.login);
  };
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) return;

    setAccount(signup.firstname);
    navigate("/");
  };
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const loginUser = async () => {
    let response = await authenticateLogin(login);

    if (response.status === 200) {
      setAccount(prev=>String(response.data.data.firstname).toUpperCase());
      setError(false);
      localStorage.setItem('userAccount', String(response.data.data.firstname).toUpperCase())
      navigate("/")
    } else {
      setError(true);
    }
  };

  
  // useEffect(()=>{
  //   let user = localStorage.getItem('userAccount');
  //   // console.log(user);
  //   if(user !== null){
  //     setAccount(user);
  //     navigate("/")
  //   }
  // }, [])

  
  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent:"center",
          flexDirection: isMobileView ? "column" : "row",
        }}
      >
        <div>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>

            <Typography style={{ marginTop: 20 }}>
              {account.subHeading}
            </Typography>
          </Image>
        </div>

        {account.view === "login" ? (
          <div>
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Username"
              />

              {error && <Error>Please enter a valid username</Error>}

              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />

              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy
              </Text>

              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>

              <RequestOTP>Request OTP</RequestOTP>

              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          </div>
        ) : (
          <div>
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter FirstName"
                style={{ marginTop: 12 }}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter LastName"
                style={{ marginTop: 12 }}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
                style={{ marginTop: 12 }}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
                style={{ marginTop: 12 }}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
                style={{ marginTop: 12 }}
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone Number"
                style={{ marginTop: 12 }}
              />
              <LoginButton
                onClick={() => {
                  signupUser();
                }}
                style={{ marginTop: 12 }}
              >
                Continue
              </LoginButton>
              <CreateAccount onClick={() => toggleLogin()}>
                Existing User? Login
              </CreateAccount>
            </Wrapper>
          </div>
        )}
      </div>

      <Contact></Contact>
    </div>
  );
};

export default LoginDialog;
