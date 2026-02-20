import { StrictMode } from 'react'
import { createRoot,ReactDom } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ShopContextProvider from './context/ShopContext.jsx'
createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ShopContextProvider>,
)
