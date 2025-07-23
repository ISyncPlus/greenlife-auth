import React, { useState } from 'react'
import Plant from '../assets/plant.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const navigate = useNavigate();
  const { session, signInUser } = UserAuth();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate('/dashboard')
        console.log('It worked')
      }
    } catch(err) {
      setError('an error occured');
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='text-black flex justify-between max-h-screen'>
      <form onSubmit={handleSignIn} className='w-md mx-auto mt-40'>
        <h1 className="text-4xl font-medium mb-5">Welcome back!</h1>
        <p className="font-medium">Enter your credentials to access your account</p>

        <div className='flex flex-col py-4 mt-10'>
          <label htmlFor="email">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder='Enter your email' className='p-3 mt-2 border rounded-xl mb-5' />

          <label htmlFor="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder='Enter your password' className="p-3 my-2 border rounded-xl"/>
          <button type='submit' disabled={loading} className="bg-neutral-900 p-3 mt-4 hover:cursor-pointer hover:scale-98 text-white rounded-2xl transition-all duration-300 ease-in-out">Sign in</button>
        </div>
        <p>Don't have an account? <Link to="/signup" className="hover:underline  text-blue-500">Sign up</Link></p>
      {error && <p className="text-red-600 text-center pt-4">{error}</p>}
      </form>
      <img src={Plant} alt="plant" className="h-[100vh]"/>
    </div>
  )
}

export default Signin
