import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/Logo.png";

function Logo() {
    return (
      <div className="flex-fill">
          <Navbar.Brand className='text-white' href="#home">
            <img
              alt="Logo"
              src={logo}
              width="40"
              height="40"
            />{' '}
            Lorem 
          </Navbar.Brand>
      </div>
    );
  }
  export default Logo;