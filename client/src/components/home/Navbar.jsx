import React, { useEffect } from 'react'

import { Typography, Box, styled } from '@mui/material'; 

import { navData } from '../../constant/data';

import { Link } from 'react-router-dom';

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px ',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        margin: 0,
        
    }
}))

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`
 
const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {

    return (
        <Component>
            {
                navData.map((data, index) => 
                (
                    <Link to={`/item/${data.text}`} style={{textDecoration:'none', color:"black"}} key={index} > 
                        <Container  >
                            <img src={data.url} style={{ width: 64, cursor: 'pointer' } } alt='nav'/>
                            <Text>{data.text}</Text>
                        </Container>
                    </Link>
                ))
            }
        </Component>
    )
}

export default NavBar;
