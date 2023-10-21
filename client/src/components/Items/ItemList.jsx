import {  useEffect } from 'react';

import { styled, Box, Typography, Grid } from '@mui/material';

import ItemDetails from './ItemDetails';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getProductByTag } from '../../redux/actions/productAction';


const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    flexDirection:'column',
    alignItems:"center",
    width:"100vw",
    justifyContent:"center",
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))


const DetailView = () => {
   
    const { tag } = useParams();
    const { products , loading, error} = useSelector(state => state.getProductByTag);

    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getProductByTag(tag));
    }, [dispatch, tag]);

    return (
        <Container >
            {loading && <div>Loading...</div>}

            {error && <div>Error: {error}</div>}

            { products && !loading && Object.keys(products).length &&

                products.map((data, index) => 
                (
                    <ItemDetails product={data} key={index}/>
                    
                )) 
            }   
        </Container>
    )
}

export default DetailView;
