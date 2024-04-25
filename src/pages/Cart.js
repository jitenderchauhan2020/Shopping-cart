import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem'
import { useState, useEffect } from 'react';

const Cart = () => {
    const {cart} = useSelector((state) => state);
    const [totalAmount, setTotalAmount] = useState(0);
    
    useEffect(()=> {
        setTotalAmount( Math.floor(cart.reduce((acc,curr) => acc + curr.price, 0)));
    },[cart])

    return (
    <div className='flex min-h-screen justify-center'>{
        cart.length > 0 ? ( 
            <div className='grid gap-12 grid-cols-2 max-w-6xl bg-white justify-between mx-auto'>
                <div>
                    {
                        cart.map((post,index) => (
                            <CartItem key={post.id} post={post}/>
                        ))
                    }
                </div>

                <div className='flex flex-col justify-between  h-[80vh] sticky top-8 mt-12'>
                    <div>
                        <p className='text-green-600 uppercase text-lg font-bold '>Your Cart</p>
                        <p className='text-green-600 uppercase text-5xl font-bold '>Summary</p>
                        <p className='font-bold text-gray-700'>Total : Items : <span className='font-semibold'>{cart.length}</span></p>
                    </div>
                    <div>
                        <p className='font-bold text-gray-700 ' >Total Amount : <span className='font-bold text-black'>${totalAmount}</span></p>
                        <button className='w-[100%] text-white bg-green-600 space-x-0 font-bold uppercase px-4 py-3 rounded-lg mt-4'>Checkout Now</button>
                    </div>
                </div>
            </div>
        ) : (
            <div className='flex justify-center flex-col items-center'>
                <h1 className='text-lg text-gray-700 uppercase font-semibold'>Your cart is Empty</h1>
                <NavLink to={'/'}><button className=' text-white w-36 bg-green-600 space-x-0 font-bold uppercase px-4 py-3 rounded-lg mt-4'>Go to Shop</button></NavLink>
            </div>
        )   
    }</div>
    )
}

export default Cart