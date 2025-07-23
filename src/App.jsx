import React from "react"
import { RouterProvider } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext"
import { router } from "./routes/router"

function App() {
  return (
    <div className="text-white h-screen font-poppins">
      <AuthContextProvider>
        <RouterProvider router={router}/> 
      </AuthContextProvider>
    </div>
  ) 
}

export default App
