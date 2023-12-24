import React from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Box} from '@mui/material';
import ContextProvider from './context/ContextProvider';

import DetailView from './components/details/DetailView';
import ItemPage from './components/Items/ItemList';

const App = () => {

  return (
    <ContextProvider > 
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop: 54}}>
        <Routes>  
          <Route path="/" element={<Home/>}/>
          <Route path="/product/:id" element={<DetailView/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/item/:tag" element={<ItemPage />} />
        </Routes>
      </Box>
      </BrowserRouter>
    </ContextProvider>

    );
}

export default App; 