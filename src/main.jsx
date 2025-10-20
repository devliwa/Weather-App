import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import Header from "./components/Header";
import Footer from "./components/Footer";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
