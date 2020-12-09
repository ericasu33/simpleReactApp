import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu (props) {
  return (
    <div>
      <div className="menuHead">
        The Menu
      </div>

      <ul>
        <li>
          <Link 
            to ="/"
            className='menuButton'
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>

        <li>
          <Link 
            to ="/about"
            className='menuButton'
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul> 
    </div>
  
  )
}

export default NavigationMenu