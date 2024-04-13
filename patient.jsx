import { Link } from "react-router-dom"

function Patient() {
    return(
     <div className="Header">
        <nav className='nav'>
          <h1>Patients</h1>
        <ul>
        <li>
            <Link className='link' to ='/profile'>Profile</Link>
            </li>
         
          <li>
          <Link className='link' to ='/precautions'>Precautions</Link>
            
            </li>
          <li>
          <Link className='link' to ='/Slogans'>Slogans</Link>
            
            </li>
            
        </ul>
  
        </nav>

    </div>
    )
}
export default Patient