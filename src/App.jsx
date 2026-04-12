import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Success from "./pages/Success"
import Home from "./pages/Home"
import Error from "./pages/Error"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CategoryMenu from "./components/CategoryMenu"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Privacy from "./pages/Privacy"
import FoodList from "./components/Foodlist"
import Navbar from "./components/Navbar"
import Header from "./components/Header"


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'/home',element:<Header/>},
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
