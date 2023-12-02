import React from 'react'
import Navbar from '../navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ProductPage from '../../ProductPage'
import SubNavbar from '../navbar/subnav/SubNavbar'
const AllRoutes = () => {
  return (
      <div>
          <>
              <Navbar />
            <SubNavbar/>
              <Routes>
                 
                  


              </Routes>
           

          </>
    </div>
  )
}

export default AllRoutes