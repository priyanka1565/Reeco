import React from 'react'
import Navbar from '../navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import SubNavbar from '../navbar/subnav/SubNavbar'
import Headers from '../header/Header'
import ProductDetails from '../../pages/ProductDetails'
const AllRoutes = () => {
  return (
      <div>
          <>
              <Navbar />
              <SubNavbar />
             <Headers/>
              <Routes>
                  <Route path='/' element={<ProductDetails />} />
                  


              </Routes>

          </>
    </div>
  )
}

export default AllRoutes