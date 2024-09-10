import { BrowserRouter } from 'react-router-dom'
import  Navbar from './components/Navbar'
import Header from './components/Header'
import './App.css'
import Programs from './components/Programs'
import Info from './components/Info'
import About from './components/About'
import Services from './components/Services'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

const App = () => {
  

  return (
 <BrowserRouter>
  <Navbar />
  <Header />
  <Programs />
  <Info />
  <About />
  <Services />
  <Feedback />
  <Footer />
 </BrowserRouter>
  )
}

export default App
