import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/CategoryMenu'
import Fooditems from '../components/Fooditems'
import CategoryMenu from '../components/CategoryMenu'

function Home() {
  return (
    <div>
        <Navbar/>
        <CategoryMenu/>
        <Fooditems/>
    </div>
  )
}

export default Home