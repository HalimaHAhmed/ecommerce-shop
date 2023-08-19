import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProductProvider } from './contexts/ProductContext';
// sidebar provider

import SidebarProvider from './contexts/SidebarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <SidebarProvider>
    <cartProvier>
    <ProductProvider>
 <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductProvider>
    </cartProvier>

  </SidebarProvider>



);
