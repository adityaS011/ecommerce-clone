import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import ResizedNav from "./ResizedNav";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: inherit;
  text-decoration: none;
`;
const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 3% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const list = () => (
    <Box onClick={handleClose}>
      <List>
        <listItem button key={0}>
          <ResizedNav />
        </listItem>
      </List>
    </Box>
  );
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
      
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#ffe500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        
        <Search />
        
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>

      </Toolbar>

    </StyledHeader>
  );
};

export default Header;
