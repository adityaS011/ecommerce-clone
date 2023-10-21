import React,{useState, useEffect} from 'react'


import SearchIcon from '@mui/icons-material/Search';
import { InputBase,  Box, styled,List, ListItem } from '@mui/material';

import {useSelector, useDispatch} from 'react-redux';
import {getProducts } from '../../redux/actions/productAction';
import {Link} from 'react-router-dom'
const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 36%;
  background-color: #fff;
  display: flex;
`;


const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;



const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;




const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #FFFFFF;
  margin-top: 36px;
`;




const Search = () => {
  const [ text, setText ] = useState();
  const [ open, setOpen ] = useState(true)

  const {products}= useSelector(state=>state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!products ){
      dispatch(getProducts());
    } 
  }, [dispatch])
    
  const getText = (text) => {
      setText(text);
      setOpen(false)
  }

  
  return (
    <SearchContainer>
    <InputSearchBase
      placeholder="Search for products, brands and more"
      inputProps={{ 'aria-label': 'search' }}
      onChange={(e)=>getText(e.target.value)}
      
    />
    <SearchIconWrapper>
      <SearchIcon />
    </SearchIconWrapper>
      {
        text && 
        <ListWrapper hidden={open}>
        {
          products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
            <ListItem>
              <Link 
                to={`/product/${product.id}`} 
                style={{ textDecoration:'none', color:'inherit'}}
                onClick={() => setOpen(true)}  
              >
                {product.title.longTitle}
              </Link>
            </ListItem>
          ))
        }  
      </ListWrapper>
      }
  
</SearchContainer>
  )
}

export default Search;