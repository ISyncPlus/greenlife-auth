import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-4 leading-10 text-black h-screen'>
      <h1 className="text-2xl">Welcome to Green Life</h1>
      <Link to="/signin">
        <button className='mt-5 border rounded-full px-7 py-2 hover:bg-black hover:text-white transition-all hover: cursor-pointer'>Get Started</button>
      </Link>
    </div>
  )
}

export default Home
