import logo from "../assets/logo.png";
import { AiFillInstagram , AiFillFacebook  , AiFillLinkedin , AiFillContacts } from "react-icons/ai";
import {Link} from "react-router-dom";

const Footer = ()=>{
  return(

    <div className="footer">

      <div className="upper"> 
        <div>
          
          <section>
            <h1> Flow Tech Repair </h1>
            (Copyrights reserved to Digital Druids)
          </section>
        </div>
        <div>
          <h3> Contact Us </h3>
          <a target="_blank" href="https://instagram.com/digital_druids?igshid=OGQ5ZDc2ODk2ZA=="> <AiFillInstagram />  <span> Instgram </span>  </a>
          <a target="_blank" href="https://instagram.com/digital_druids?igshid=OGQ5ZDc2ODk2ZA=="> <AiFillFacebook /> <span> Facebook </span>  </a>
          <a target="_blank" href="https://instagram.com/digital_druids?igshid=OGQ5ZDc2ODk2ZA=="> <AiFillLinkedin /> <span> Linkedin </span>  </a>
          <a target="_blank" href="https://instagram.com/digital_druids?igshid=OGQ5ZDc2ODk2ZA=="> <AiFillContacts /> <span> Contact </span>  </a>
        </div>

        <div>
          <h3> Sign In </h3>
          <Link to="agency_sign"> Sign In as Agency </Link>
          <Link to="user_sign"> Sign In as User </Link>
        </div>

      </div>
    
    </div>
  
  )
}

export default Footer;