import { Link } from "react-router-dom";


const Header =()=>{
    return <div>
        
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className ="container">
            <a className ="navbar-brand" href="#">My Portfolio</a>
            <button className ="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className ="navbar-toggler-icon"></span>
            </button>
          
            <div className ="collapse navbar-collapse" id="navbarResponsive">
              <ul className ="navbar-nav ml-auto">
                <li className ="nav-item active">
                  <a className ="nav-link" href="#">
                    <Link  to="/">Welcome</Link>
                    <span class="sr-only">(current)</span></a>
                </li>
                <li className ="nav-item">
                  <a className ="nav-link" href="#work" >
                    <Link  to="Work">Work</Link> 
                    </a>
                </li> 
                <li className ="nav-item">
                  <a className ="nav-link" href="#Skills">
                  <Link  to="Skills">Skills</Link>
                  </a>
                </li>
                <li className ="nav-item">
                    <a className ="nav-link" href="#AboutMe">
                    <Link  to="About">About</Link>
                    </a>
                  </li>
                  <li className ="nav-item">
                    <a className ="nav-link" href="#Contact">
                    <Link  to="Contact">Contact</Link>
                    </a>
                  </li>
               
              </ul>
            
            </div>
        </div>
          </nav>
    </div>

    
}


export default Header;