import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'



const Home = () => {
    const APIurl = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData(){
        setLoading(true);
        try {
            const response = await fetch(APIurl);
            const data = await response.json();
            setPosts(data);

        } catch (error) {
            console.log("Error found in Networking Call");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    }, []);


    return (
    <div className='flex justify-center min-h-screen'>{
        loading ? (<div className='flex flex-col justify-center items-center'>
            <Spinner/>
            <h1 className='text-lg text-gray-700 mt-3 font-semibold'>Loading</h1>
        </div>
        ) : (<div>{
            posts.length > 0 ? (
                <div className='grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
                {posts.map((post) => (
                    <Product key={post.id} post = {post} />
                ) )}
                </div>
            ) : (
                <div className='flex justify-center items-center'>
                    <p>No Post Found</p>
                </div>
            )
        }</div>)
    }</div>
    )
}

export default Home