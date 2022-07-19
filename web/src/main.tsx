import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App' //colocamos chaves pois não foi usado o export default

 import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
