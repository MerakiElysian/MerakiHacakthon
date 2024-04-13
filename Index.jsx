import { Link } from "react-router-dom"

function Index() {
    return(
     <div className="Header">
        <nav className="nav">
          <h1>Health-Center</h1>
        <ul>
        <li>
            <Link className='link' to ='/'>Home</Link>
            </li>
          <li>
            <Link className='link' to ='/about'>About</Link>
            </li>
          
           
            <li>
          <Link className='link' to ='/signup'>Login</Link>
            
            </li>
        </ul>
  
        </nav>

    </div>
    )
}
export default Index