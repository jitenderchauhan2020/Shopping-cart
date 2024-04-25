import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const {cart} = useSelector((state) => state)
    return (
    <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto'>
        <div className='ml-5 '>
        <NavLink to = "/"><img className='h-12 w-48' alt='logo' src='./logo.png'/>
        </NavLink>
        </div>
        <div className='flex items-center font-medium mr-5 text-slate-100 space-x-6'>
            <NavLink to={'/'}><p>Home</p></NavLink>

            <NavLink to={'/cart'}>
                <div className='relative'>
                    <FaShoppingCart className='text-2xl'/>
                    {cart.length > 0 && <span className='absolute -top-1 -right-2 text-[10px] w-4 h-4 animate-bounce flex justify-center items-center rounded-full text-white bg-green-600'>{cart.length}</span>}
                </div>
            </NavLink>
        </div> 
    </nav>
    )
}

export default Navbar