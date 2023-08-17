import React, { createContext, useState, useEffect } from 'react';

// Create the product context
const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // products state
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    const fetchProducts =  async () =>{
      const response = await fetch('https://fakestoreapi.com/products');

      const data = await response.json();
        setProducts(data)
    };
    fetchProducts()

  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };