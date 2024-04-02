import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../CustomHook/Auth'
import axios from 'axios'
import { toast } from 'react-toastify'
import useCart from '../../CustomHook/Cart'

function Menu() {
  // context values
  const { contextData, setToken } = useAuth()
  const { cartData } = useCart()
    // router instance
  const navigate = useNavigate()

  // logout logic
  const logout = async () => {
      if(window.confirm(`Are you sure to logout?`)) {
        setToken(false)
        toast.success("Logout successfully")
        navigate(`/`)
      } else {
        toast.warning("Logout terminated")
      }
  }
  
  const openSidebar = () => {
    document.getElementById("sideMenu").classList.add("active")
  }
  const closeSidebar = () => {
    document.getElementById("sideMenu").classList.remove("active")
  }

  return (
   <React.Fragment>
      <header>
        <nav className="navbar">
            <div className="container">
                 <button className="btn-menu" onClick={openSidebar} >
                    <i className="bi bi-list"></i>
                 </button>

                 <NavLink to={`/`} className="logo">React-E-Shop</NavLink>

                 <div>
                    <NavLink to={`/cart`} className="cart">
                        <i className="bi bi-cart-fill"></i> <strong className='circle'> {cartData?.cart.length} </strong>
                    </NavLink>

                   {
                      contextData.token ?  
                      <button onClick={logout} className="btn btn-danger" style={{ marginLeft:'10px'}}>
                        <i className="bi bi-box-arrow-right"></i>
                      </button>: null 
                   }
                 </div>
            </div>
        </nav>
      </header>
      {/* sidebar menu */}
      <div className="sidebar" id="sideMenu">
          <div className="sidebar-header">
            <h4 className="sidebar-title">React-E-Shop</h4>
            <button className="btn close" onClick={closeSidebar}>
                <i className="bi bi-x"></i>
            </button>
          </div>
          <div className="sidebar-body">
              <ul className="menulist">
                <li className="menu-item">
                    <NavLink to={`/`} className="menu-link">Home</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to={`/about`} className="menu-link">About</NavLink>
                </li>
                <li className="menu-item">
                    <NavLink to={`/contact`} className="menu-link">Contact</NavLink>
                </li>
              </ul>
          </div>
      </div>
   </React.Fragment>
  )
}

export default Menu