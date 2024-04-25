import React from 'react'
import toast from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({post, itemindex}) => {
  const disPatch = useDispatch();

  const removeFromCart =() => {
    console.log(post.id);
    disPatch(remove(post.id));
    toast.error("Item Deleted");
  } 
  
  return (
      <div className='flex items-center h-[210px]  my-12 pb-12 border-b-2 border-gray-700'>
        <div className='h-[180px] w-[190px] px-6'>
          <img className='h-full w-full' alt='product-imag' src={post.image} />
        </div>
        <div className='w-[65%] mx-auto h-full px-5 flex flex-col justify-between'>
          <div>
            <h1 className='font-semibold text-lg text-left truncate mt-1'>{post.title}</h1>
            <p className='text-slate-700 text-sm text-left my-3 '>{post.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
          </div>
          <div className='flex justify-between items-center'>
            <p className='text-green-600 font-bold '>${post.price} </p>
            <button onClick={removeFromCart} className='bg-red-200 rounded-full text-red-600 text-xl p-2'><MdDelete className='hover:animate-ping transition ease-in duration-75' /></button>
          </div>
        </div>
      </div>
  )
}

export default CartItem