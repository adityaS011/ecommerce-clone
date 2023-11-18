import React, { useEffect } from 'react'


import NavBar from './Navbar'
import Banner from './Banner';
import Slide from './Slide';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productAction';
import { Box, styled } from '@mui/material';
import MidSlide from "./MidSlide";
import MidSection from './MidSection';
import Contact from './Contact';

const Component = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`

const Home = () => {

  const { products } = useSelector(state => state.getProducts);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());

  }, [dispatch])

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide
          products={products}
          title='Discounts for You'
          timer={false}
          multi={true}
        />
        <MidSection />

        <Slide
          products={products}
          title='Suggested Items'
          timer={false}
          multi={false}
        />
        <Slide
          products={products}
          title='Top Selection'
          timer={false}
          multi={true}
        />
        <Slide
          products={products}
          title='Recommended Items'
          timer={false}
          multi={true}
        />

        {/* <Contact></Contact> */}
      </Component>
    </>
  )
}

export default Home;
