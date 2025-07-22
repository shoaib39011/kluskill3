import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { BrowserRouter } from 'react-router-dom'
import Master from './components/Master.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
      <App></App>
   </BrowserRouter>,
)
