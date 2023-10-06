import React from "react";
import { Box, styled } from "@mui/material";
import { BsTwitter } from "react-icons/bs";
import { BiLogoYoutube } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30%;
  margin: 10px;
  font-size: 30px;
`;

const SocialIcon = styled(Box)`
  &:hover {
    transform: scale(1.3);
    transition: 0.3s linear;
  }
`;

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "300px",
        backgroundColor: "#1e272e",
        color: "white",
        width: "100%",
        padding: "5px",
      }}
    >
      <div style={{ padding: "5px" }}>
        <ul>
          <h3>About</h3>
          <li>Contact Us</li>

          <li>About Us</li>

          <li>Carreres</li>

          <li>Press</li>
        </ul>
      </div>

      <div style={{ padding: "10px" }}>
        <ul>
          <h3>HELP</h3>
          <li>Payments</li>

          <li>Shipping</li>

          <li>Cancellation&Returns</li>

          <li>FAQ</li>
          <li>Report Infringement</li>
        </ul>
      </div>

      <div style={{ display: "flex" }}>
        <Component>
          <SocialIcon>
            <Link to="/">
              {" "}
              {/* Use Link component with "to" prop */}
              <BsTwitter style={{ color: "#2092df" }}></BsTwitter>
            </Link>
          </SocialIcon>
        </Component>

        <Component>
          <SocialIcon>
            <FaFacebookF style={{ color: "#4267B2" }}></FaFacebookF>
          </SocialIcon>
        </Component>

        <Component>
          <SocialIcon>
            <BiLogoYoutube style={{ color: "red" }}></BiLogoYoutube>
          </SocialIcon>
        </Component>
      </div>

      <div style={{ padding: "10px" }}>
        <ul>
          <h4>CONSUMER POLICY</h4>

          <li>Terms Of Use</li>

          <li>Security</li>

          <li>Privacy</li>

          <li>SiteMap</li>
        </ul>
      </div>

      <div style={{ padding: "10px" }}>
        <ul>
          <h3>Mail Us: </h3>
          <li>Flipkart Clone Private Limited, </li>

          <li> Buildings Alyssa, Begonia & </li>
          <li> Clove Embassy Tech Village,</li>

          <li>Outer Ring Road, Devarabeesanahalli Village,</li>

          <li>Bengaluru, 56210 </li>
        </ul>

        
       
      </div>
    </div>
  );
};

export default Contact;
