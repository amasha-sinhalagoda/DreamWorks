import React from 'react'

import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import Header from '../components/Header'
import Contact from '../pages/Contact'
import Footer from '../components/Footer'
import ScrollUp from '../components/ScrollUp'
import CategoryDetail from '../pages/CategoryDetail'
import Portfolio from '../pages/Portfolio'
import AdminDashboard from '../pages/AdminDashboard'
import UpdatePortfolio from '../pages/UpdatePortfolio'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <BrowserRouter>
    <div className='w-full overflow-hidden'>
    <Routes>
    
      <Route path='/' element={<Header/>}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/gallery' element={<Portfolio />}/>
      <Route path= '/dashboard' element={<AdminDashboard/>}/>
      <Route path="/portfolio/:id" element={<CategoryDetail />} />
      <Route path='/viewGallery' element={<UpdatePortfolio/>}/>
    </Routes>
    
     <ScrollUp/>
     <ToastContainer/>
    </div>
    </BrowserRouter>
    
  )
}

export default App;