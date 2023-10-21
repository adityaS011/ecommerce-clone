import React from 'react';

import {
  Card,
  Box,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

import { makeStyles } from '@mui/styles';


import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    width: '80%',
    marginTop: '20px',
    padding: '20px',
    border: '1px outset #F3F3EB'
  },
  cardContent: {
    flex: 1,
    minWidth: '35vw',
    maxHeight: 'fit-content',
  },
  cardMedia: {
    maxWidth: '150px',
    maxHeight: '180px'
  },
  typography: {
    whiteSpace: 'nowrap', // Prevents text from wrapping to the next line
    overflow: 'hidden',   // Hides text that overflows the container
    textOverflow: 'ellipsis', // Displays an ellipsis (...) for overflowed text
    maxWidth: '2000px', // Set the maximum width of the container
  },
  container: {
    background: '#FFFFFF',
    display: 'flex',
    alignItems:"center",
    width:"100vw",
    justifyContent:"center",
    textDecoration:'none'
  }
});

const ItemDetails = ({ product }) => {
  const classes = useStyles();

  return (
    <Link to={`/product/${product.id}`} className={classes.container} > 
      <Card className={classes.card}>
          <CardMedia
            component="img"
            alt={product.name}
            image={product.detailUrl}
            title={product.name}
            className={classes.cardMedia}
          />
          <CardContent className={classes.cardContent}>
              <Typography variant="h6" gutterBottom>
                  {product.title.longTitle}
              </Typography>
              <Typography color="secondary">
                  {product.tagline}
              </Typography>
              <Typography variant="body2" color="textSecondary" className={classes.typography}>
                  {product.description}
              </Typography>
              <Box display="flex">
                <Typography variant="h6" color="green" mr={2}>${product.price.discount}</Typography>
                <Typography variant="h6" > ${product.price.mrp}</Typography>
              </Box>
          </CardContent>
      </Card>
    </Link>
  );
};

export default ItemDetails;

  