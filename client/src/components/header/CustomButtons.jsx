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
  margin: "0 2% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  transition: all 0.3s ease;

  &:hover {
    color: #2874f0;
    background: #ffffff;
    box-shadow: 5px 4px 8px 2px rgba(0, 0, 0, 0.1);
    transform: scale(1.05);
  }
`;

const CustomButtons = () => {

  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);
 
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() =>window.location="/login" }>
          Login
        </LoginButton>
      )}

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container to="/cart">
        <Badge
          badgeContent={cartItems?.length}
          color="secondary"
          style={{ color: "red" }}
        >
          <ShoppingCart style={{ color: "white" }} />
        </Badge>
        <Typography style={{ marginLeft: "5px" }}>Cart</Typography>
      </Container>
      
    </Wrapper>
  );
};

export default CustomButtons;