import React, { useState } from 'react'
import { useTransition, animated } from 'react-spring'
import NavigationMenu from './NavigationMenu'

function Navigation() {
  const [showMenu, setShowMenu] = useState(false)
  
  const maskTransitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    })

  const menuTransitions = useTransition(showMenu, null, {
    from: {  opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)'},
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

  return (
    <nav>
      <i onClick={() => {setShowMenu(!showMenu)}} className="fa fa-bars"></i>

      {
        maskTransitions.map(({ item, key, props }) =>
        item && 
        <animated.div 
          key={key} 
          style={props}
          className="menuMask"
          onClick={() => setShowMenu(false)}
        >
        </animated.div>
        )
      }

      {
        menuTransitions.map(({ item, key, props }) =>
        item && 
        <animated.div 
          key={key} 
          style={props}
          className="menu"
        >
         
         <NavigationMenu closeMenu={() => setShowMenu(false)}/>
        </animated.div>
        )
      }

    </nav>
  )
}

export default Navigation;