import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductProvider } from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import { CartProvider } from './contexts/CartContext';

ReactDOM.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>,
  document.getElementById('root')
);