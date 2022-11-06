import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return <div className='error-page'>
  <div className="height">
      <p className='error404'>404 error</p>
      <p className='lg-text'>We can't find that page</p>
      <p className='normal-text'>Sorry the page you're looking for doesn't exist or has been moved.</p>
      <div className="flex-1">
          <Link to='/' className='home-btn'>
            Take me home
          </Link>
          
      </div>
  </div>
  </div>
}

export default NotFound
