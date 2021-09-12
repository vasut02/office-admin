import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      Home Page
      <div>
        <Link to="/admin">admin </Link>
      </div>
      <div>
        <Link to="/admin/entries">entries </Link>
      </div>
      <div>
        <Link to="/login">login</Link>
      </div>
    </div>
  )
}

export default Home
