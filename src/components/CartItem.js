import React, { useContext } from 'react';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';

// import cart context

import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const {removeFromCart,increaseAmount,decreaseAmount} = useContext(CartContext)
  const { id, title, image, price, amount } = item;

  return (
    <div className='flex gap-x-4 py-2 lg:px-6 border-gray-200 w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt='' />
        </Link>

        <div className='w-full flex flex-col'>
          {/* title and remove icon */}
          <div className='flex justify-between mb-2'>
            <a href={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </a>

            {/* remove icon */}
            <div onClick={()=>removeFromCart(id)} className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>

          {/* additional details */}
          <div className='flex flex-row'>
            <div className=' w-[80px]'>
              <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
              <div onClick={()=>decreaseAmount(id)} className='flex-1 flex justify-center items-center cursor-pointer bg-pink-500 h-full'>
                  <IoMdRemove />
                </div>
                {/* amount */}
                <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                <div   onClick={()=> increaseAmount(id)}   className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                  <IoMdAdd />
                </div>
              </div>
            </div>
            <div className=' w-[80px]'>
              <div>
                {/* price */}
                <div className='flex-1 flex items-center justify-around'>${price}</div>
              </div>

            </div>
            <div className=' w-[80px]'>
              <div>
                {/* final price */}
                {/* make the price at 2 decimals */}
                <div className='flex-1 flex justify-end items-center text-primary font-medium'>
                    ${parseFloat(price * amount).toFixed(2)}
                  </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;