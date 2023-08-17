import React,{useContext} from 'react';

// import link

import { Link } from 'react-router-dom';

// import icons
import {BsPlus,BSEyeFill} from 'react-icons/bs'

const Product = ({product}) => {

  console.log(product)

  // destructure product


  const {id,image,catergory,title,price}  = product
  return(

    <div>
      <div>1</div>

      <div>2</div>



    </div>






  )
};

export default Product;
