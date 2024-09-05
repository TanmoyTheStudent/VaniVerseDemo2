import { Link } from "react-router-dom"
import Logo from "../../required-data/assests/image/Logo9.png"
import './header.css'

function HeaderResposive() {
  return (
    <div>
           <nav className="navbar navbar-light  navbar-expand-xl" style={{ backgroundColor: '#e7dedd' }}>
    <div className="container-fluid">
       <div className="col-lg-6 col-md-10 col-10">
          <Link
              className="navbar-brand mb-0 h3 text-primary fs-1 fw-bold home-link"
               to="/"
              style={{ display: 'flex', alignItems: 'center' }} // Flex to align items vertically
            >
                <img
                  src={Logo}
                  alt="Vani Verse Logo"
                  style={{
                    maxWidth: '65%',
                    height: 'auto',
                    display: 'block',
                    marginLeft: '5%', // Add gap to the left
                  }}
                />
        </Link>
      </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
         <span className="navbar-toggler-icon"></span>
    </button>

    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
     style={{ backgroundColor: 'rgba(231, 222, 221, 0.8)' }} >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
        <img 
                        src={Logo}
                        alt="Vani Verse Logo" 
                        style={{ maxWidth: '65%', height: 'auto', display: 'block' }} 
                    />
        </h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body " >
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/our-services">
          Services
      </Link>
          
          </li>


          <li className="nav-item p-3 p-lg-0">
                 <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/participate&earn">
          Participate & Earn
      </Link>
          </li>

          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/about-us">
          About Us
      </Link>
          </li>


          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/login">
          Login 
      </Link>
          </li>

          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/register-yourself">
          Register
      </Link>
          </li>
          
        
           
        </ul>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default HeaderResposive
