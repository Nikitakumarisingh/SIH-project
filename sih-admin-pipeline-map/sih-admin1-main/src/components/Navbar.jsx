import {Link} from 'react-router-dom';
import { FaUserCheck } from "react-icons/fa";
import logo from "../assets/logo.png";


const Navbar = ()=>{
  return(
    <nav> 
      <Link to={"/"}> 
        <img src={logo} />
      </Link>
      <div>
          <Link to="/about"> About Us </Link>
          <Link to="/services"> Services </Link>
          {/* <Link to="/map3"> Pipeline </Link> */}
          <Link to="/update"> Alert & Updates </Link>
          <a href="https://login-page.princesharma28.repl.co/">  <FaUserCheck /> Register </a>
      </div>
    </nav>
  )
}

export default Navbar;