import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault();
      try {
        await signOut()
        navigate('/signup')
      } catch(err) {
        console.error(err)
      }
  }
  console.log(session)
  return (
    <div>
      <h1 className="text-2xl font-medium">Dashboard</h1>
      <h2>Welcome, {session?.user?.email}</h2>
      <div>
        <button onClick={handleSignOut} className="hover:cursor-pointer border inline-block px-4 py-3 mt-4">Sign out</button>
      </div>
    </div>
  )
}

export default Dashboard
