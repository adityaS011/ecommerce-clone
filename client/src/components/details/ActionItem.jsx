import { useState} from 'react';

import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

import { addToCart } from '../../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0px 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')(({theme}) =>({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%',
    [theme.breakpoints.down('sm')]: {
        width: '80%',
        height: '20%',
        
    }
}));

const StyledButton = styled(Button)(({theme}) =>({
    width: '46%',
    bordeRadius: 2,
    height: 50,
    color: '#FFF',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'

    }
}));

const ActionItem = ({ product }) => {
     const navigate = useNavigate();
    const { id } = product;
        
     const [quantity, setQuantity] = useState(1);
     const dispatch = useDispatch();

     const buyNow = async () => {
         let response = await payUsingPaytm({ amount: 500, email: 'aditya.singh.lko2002@gmail.com'});
           var information = {
               action: 'https://securegw-stage.paytm.in/order/process',
               params: response    
          }
          post(information);
     }

     const addItemToCart = () => {
         dispatch(addToCart(id, quantity));
     navigate('/cart');
}

    return (
        <LeftContainer>
            <Image src={product.detailUrl} /> <br />
             <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
             {/* onClick={() => buyNow()} */}
            <StyledButton  onClick={() => buyNow()} style={{background: '#fb641b'}}  variant="contained"><Flash /> Buy Now</StyledButton> 
        </LeftContainer>
    )
}

export default ActionItem;