import React from 'react'
import './Routing.css'
import { Link} from 'react-router-dom'

const Routing = () => {
  return (
    <div>
          
           <nav className='links'>
            <Link to='/dashboard' className='link'>DASHBOARD</Link>
            <Link to='/chats' className='link'>CHATS</Link>
            <Link to='/cards' className='link'>CARDS</Link>
            <Link to='/widgits' className='link'>WIDGITS</Link>
            <Link to='/components' className='link'>COMPONENTS</Link>
            <Link to='/pages' className='link'>PAGES</Link>
           </nav>

    </div>
  )
}

export default Routing