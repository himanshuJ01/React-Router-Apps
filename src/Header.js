import React from 'react';
import { Link} from 'react-router-dom'

const Header =() => {
   return(
     <>
     <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med">
        <li>
          <Link to="/"> Home </Link>
        </li>
         <li>
          <Link to="/about"> About </Link>
        </li>
         <li>
          <Link to="/profile"> Profile </Link>
        </li>
      </ul>
    </div>
  </nav>
     
      </>

   )
}


export default Header;
