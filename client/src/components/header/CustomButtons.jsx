import React from 'react';
import { useState, useContext } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography,Badge,  Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 2% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        fontSize: 16,
        alignItems: 'center',
   
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}));

const Container = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));
const LoginButton = styled(Button)`
color: #2874f0;
background: #ffffff;
text-transform: none;
padding: 5px 40px;
border-radius: 8px;
box-shadow: none;
font-weight: 600;
height:32px;

`


const CustomButtons = () => {
    const { account, setAccount } = useContext(DataContext);
    const [open, setOpen] = useState(false);
    const {cartItems} = useSelector(state => state.cart);
    const openDialog =()=>{
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account? <Profile account={account} setAccount={setAccount}/> :
                <LoginButton variant="contained" onClick={()=> openDialog()}>Login</LoginButton>

            }
            
            <Typography style={{marginTop: 3, width: 135}}>Become a Seller</Typography>
            <Typography style={{marginTop: 3}}>More</Typography>

            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary" style={{color: 'red'}}>
                <ShoppingCart  style={{color: 'white'}} />
                </Badge>
                <Typography style={{marginLeft:'5px'}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    );
}

export default CustomButtons;
