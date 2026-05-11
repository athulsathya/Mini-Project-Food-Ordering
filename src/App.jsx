import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Success from "./pages/Success"
import Error from "./pages/Error"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./components/Cart"
import Orders from "./pages/Orders"
import Privacy from "./pages/Privacy"
import FoodList from "./components/Foodlist"
import Header from "./components/Header"
import Home from "./pages/Home"
import { useState } from "react"


function App() {
const [category,setCategory]=useState("All")

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        
         { index: true, element: <Home /> },  
        {path:'/home',element:<Home/>},
        {path:'/about',element:<About/>},
        {path:'/contact',element:<Contact/>},
        {path:'/menu',element:<FoodList/>},
        {path:'/cart',element:<Cart/>},
        {path:'/orders',element:<Orders/>},
        {path:'/privacy',element:<Privacy/>},
        {path:'/success',element:<Success/>},
        {path:'/error',element:<Error/>}
      ]
    }
  ])
            
  return <RouterProvider router={router} />

}

export default App
