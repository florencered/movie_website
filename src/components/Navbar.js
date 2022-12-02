import React from 'react'
import { NavLink } from "react-router-dom"
import './style.css';
import Image from "../Images/logo.png";
const Navbar = () => {
    return (
        <div className='wrapper'>

            <div className='navbar '>
                <div className='menuIcon'>
                    <img src={Image} alt="company logo" className='logo' />

                </div>
                <div className=' btn-group   '>

                    < NavLink className="btn-group-item text-uppercase" to="/">Home</ NavLink>

                    < NavLink className="btn-group-item text-uppercase " to="/movies">Movies</ NavLink>

                    < NavLink className=" btn-group-item text-uppercase " to="/about">About</ NavLink>

                </div>

            </div>
        </div>
    )
}

export default Navbar