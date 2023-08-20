import React, { useState } from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);

  // item amount state
  const [itemAmount, setItemAmount] = useState(0);

  // add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // check if the item is already in the cart
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }

    console.log(`Item ${product.title} added to the cart`);
  };

  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };


  // clear cart
  const clearCart = ()=>{
    setCart([])
  }

  // increase amount


  const increaseAmount  = (id)=>{

    const item  = cart.find((item)=> item.id ===id);
      addToCart(item,id)    // console.log(`item ${id}amount increased`)
  }


  // descrease amount

  const decreaseAmount = (id)=>{
    const critem = cart.find(item=>{
      return item.id === id;
    });

    if(critem){
      const newCart = cart.map(item=>{
        if (item.id ===id){
          return {...item, amount:critem.amount-1}
        } else{
          return item;
        }

      });
      setCart(newCart );

    }else{
      if (critem.amount <2){
        removeFromCart(id)
      }
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount,}}>
      {children}
    </CartContext.Provider>
  );
};