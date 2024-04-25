import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add, remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';


const Product = ({post}) => {
    const {cart} = useSelector((state) => state);
    const disPatch = useDispatch();

    const addToCart =() => {
        disPatch(add(post));
        toast.success("Item Added To Cart");
    }

    const removeFromCart = () => {
        disPatch(remove(post.id));
        toast.error("Item Remove From Cart");
    }

    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in  rounded-lg  shadow-slate-950 p-3 gap-3 hover:shadow-2xl mt-10'>
            <div>
                <p className='text-gray-700 font-semibold text-lg text-left truncate mt-1 w-40'>{post.title}</p>
            </div>

            <div className='w-40 text-slate-400 font-normal text-[10px] text-left '>
                <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>

            <div className='h-[180px] w-[140px]'> 
                <img className='h-full w-full' alt='product_image' src={post.image}/>
            </div> 
            
            <div className='flex justify-between gap-10 items-center w-full max-w-[50vw] mt-5'>
                <div>
                    <p className='text-green-600 font-semibold '>${post.price}</p>
                </div>
                <div>
                {
                    cart.some((p) => p.id == post.id)? ( 
                        //true
                        <button className='text-gray-700 rounded-full border-2 font-semibold text-[12px] px-3 p-1 uppercase border-gray-700 hover:bg-gray-700 hover:text-white transition duration-150 ease-in' onClick={removeFromCart}>
                            Remove Item
                        </button>
                    ): (
                        //false
                        <button className='text-gray-700 rounded-full border-2 font-semibold text-[12px] px-3 p-1 uppercase border-gray-700 hover:bg-gray-700 hover:text-white transition duration-150 ease-in' onClick={addToCart}>
                            Add to Cart
                        </button>
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default Product