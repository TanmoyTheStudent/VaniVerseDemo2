import { Link } from "react-router-dom"
import Logo from "../../required-data/assests/image/Logo9.png"
import './header.css'
import { Box } from "@mui/material";

function HeaderResposive() {
  const handleCloseOffcanvas = () => {
    // Select the off-canvas element
    const offcanvasElement = document.getElementById('offcanvasNavbar');
    const offcanvas = window.bootstrap.Offcanvas.getInstance(offcanvasElement);
    if (offcanvas) {
      // Hide the off-canvas menu
      offcanvas.hide();
    }
  };

  return (
    <div>
           <nav className="navbar navbar-light  navbar-expand-xl" style={{ backgroundColor: '#e7dedd' }}>
    <div className="container-fluid">
   
  <div className="col-xl-6 col-9">
    <Link
      className="navbar-brand mb-0 h3 text-primary fs-1 fw-bold home-link"
      to="/"
      style={{ display: 'flex', alignItems: 'center' }} // Flex to align items vertically
    >
       <Box
                component="img"
                src={Logo}
                alt="Vani Verse Logo"
                sx={{
                  maxWidth: {lg:"65%",md:'60%',xs:"80%"},
                  height: 'auto',
                  display: 'block',
                  marginLeft: '5%', // Add gap to the left
                }}
          />
    </Link>
  </div>



    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" >
         <span className="navbar-toggler-icon"></span>
    </button>

    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"
     style={{ backgroundColor: 'rgba(231, 222, 221, 0.8)' }} >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">

        <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/" onClick={handleCloseOffcanvas}>
        <img 
                        src={Logo}
                        alt="Vani Verse Logo" 
                        style={{ maxWidth: '65%', height: 'auto', display: 'block' }} 
                    />
      </Link>
        

         
        </h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body " >
        <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/our-services" onClick={handleCloseOffcanvas}>
          Services
      </Link>
          
          </li>


          <li className="nav-item p-3 p-lg-0">
                 <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/participate&earn" onClick={handleCloseOffcanvas}>
          Participate & Earn
      </Link>
          </li>

          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/about-us" onClick={handleCloseOffcanvas}>
          About Us
      </Link>
          </li>


          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/login" onClick={handleCloseOffcanvas} >
          Login 
      </Link>
          </li>

          <li className="nav-item p-3 p-lg-0">
          <Link className="navbar-brand mb-0 h3 mx-xl-3" to="/register-yourself" onClick={handleCloseOffcanvas}>
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
