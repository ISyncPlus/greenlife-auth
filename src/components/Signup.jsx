import React, { useState } from 'react'
import Plant from '../assets/plant.png'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')

  const navigate = useNavigate();
  const { session, signUpNewUser } = UserAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true)

    try {
      const result = await signUpNewUser(email, password);
      if (result.success) {
        navigate('/dashboard')
        console.log("signup worked")
      }
    } catch(err) {
      setError('an error occured');
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='flex justify-between max-h-screen text-black'>
      <form onSubmit={handleSignUp} className='w-md mx-auto mt-40'>
        <h2 className='font-medium text-4xl mb-5'>Get Started Now</h2>
        

        <div className='flex flex-col py-4 mt-10'>
          <label htmlFor="email">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder='Enter your email' className='p-3 mt-2 border rounded-xl mb-5' />

          <label htmlFor="password">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} name="password" type="password" placeholder='Enter your password' className="p-3 my-2 border rounded-xl"/>
          <button type='submit' disabled={loading} className="border rounded-xl hover:scale-95 transition-all duration-300 p-3 mt-4 hover:cursor-pointer active:opacity-90">Sign Up</button>
        </div>
        <p>Already have an account? <Link to="/signin" className="hover:underline-offset-1 text-blue-500">Sign in</Link></p>
      {error && <p className="text-red-600 text-center pt-4">{error}</p>}
      </form>
      <img src={Plant} alt="plant" className="h-screen"/>
    </div>
  )
}

export default Signup
