import React from 'react';

import Header from './components/header/Header';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import {Box} from '@mui/material';
import DataProvider from './context/DataProvider';

import DetailView from './components/details/DetailView';
import ItemPage from './components/Items/ItemList';

const App = () => {

  return (
    <DataProvider > 
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
    </DataProvider>

    );
}

export default App; 