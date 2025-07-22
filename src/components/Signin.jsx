import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
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
      }
    } catch(err) {
      setError('an error occured');
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='bg-neutral-800'>
      <form onSubmit={handleSignIn} className='max-w-md m-auto pt-24'>
        <h2 className='font-bold pb-2'>Sign in</h2>
        <p>Don't have an account? <Link to="/signup" className="hover:underline-offset-1 text-blue-500">Sign up</Link></p>

        <div className='flex flex-col py-4'>
          <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' className='p-3 mt-2 bg-neutral-950' />
          <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' className="p-3 my-2 bg-neutral-950"/>
          <button type='submit' disabled={loading} className="bg-neutral-900 p-3 mt-4 hover:cursor-pointer active:opacity-90">Sign in</button>
        </div>
      {error && <p className="text-red-600 text-center pt-4">{error}</p>}
      </form>
    </div>
  )
}

export default Signin
