import React from "react";
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Box, Typography, Badge, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  width: 200,
  margin: "0 2% 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& > *": {
    marginLeft: "20px !important",
    marginRight: "20px !important",
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  width: 135,
  textDecoration: "none",
  display: "flex",
  flexDirection: "row",
  marginTop: 20,
  color: "black",
  alignItems: "center",
  border: "1px solid #111111", // Add border style here
  borderRadius: "8px", // Optional: Add border radius for rounded corners
  padding: "10px", // Optional: Add padding for spacing

  transition: "background-color 0.3s, border-color 0.3s", // Add transition for smooth effect
  "&:hover": {
    backgroundColor: "#2a55e5", // Change background color on hover
    borderColor: "#2a55e5", // Change border color on hover
    color: "white",
  },
  
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)`
  width: 155px;
  color: white;
  background: #2a55e5;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  display: "flex";
  align-items: "center";
  justify-content: "center";
  box-shadow: none;
  font-weight: 600;
  margin-top: 20px;
  border-radius: 8px;

  &:hover {
    color: white;
    background: #2a55e5;
    border-color: #070707;
    border-radius: 8px;
  }
`;
const LogoImage = styled("img")(({ theme }) => ({
  width: 50, // Adjust the width as needed
  height: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 10, // Add spacing between the image and the button
}));


const Logo = styled(Box)(({ theme }) => ({
    width: 150, // Adjust the width as needed
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15, // Add spacing between the image and the button
  }));

const ResizedNav = () => {
  const { account, setAccount } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <>
          <Logo>
            <LogoImage src="./favicon.ico" alt="Logo" />
          </Logo>

          <LoginButton variant="contained" onClick={() => openDialog()}>
            Login
          </LoginButton>
        </>
      )}

      <Container>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Typography>Become a seller</Typography>
        </Box>
      </Container>

      <Container>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          <Typography>More</Typography>
        </Box>
      </Container>

      <Container to="/cart">
        <Box style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
          <Badge
            badgeContent={cartItems?.length}
            color="secondary"
            style={{ marginLeft: "15px" }}
          >
            <ShoppingCart style={{ marginLeft: "10px", color: "inherit" }} />
          </Badge>
          <Typography style={{ marginLeft: "15px" }}>Cart</Typography>
        </Box>
      </Container>

      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default ResizedNav;
