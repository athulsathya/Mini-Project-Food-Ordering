import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import Menu from "./pages/Menu"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Orders from "./pages/Orders"
import Login from "./pages/Login"
import Feedback from "./pages/Feedback"
import Home from "./pages/Home"


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {path:'home',element:<Home/>},
        {path:'menu',element:<Menu/>},
        {path:'contactUs',element:<Contact/>},
        {path:'cart',element:<Cart/>},
        {path:'order',element:<Orders/>},
        {path:'login',element:<Login/>},
        {path:'feedback',element:<Feedback/>}
      ]
    }
  ])

  return <RouterProvider router={router}/>
    
}

export default App
