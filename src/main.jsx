import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import PizzaProvider from './context/PizzaContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </BrowserRouter>
  </React.StrictMode>

)
