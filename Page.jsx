import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Notfound from './Notfound'
import { UserContext } from '../contexts/UserContext'
import { useEffect, useState } from 'react'
import DoctorInterface from './DoctorInterface'
import GovernmentAssistantInterface from './GovernmentAssistantInterface'
import PatientInterface from './PatientInterface'

function Page() {
    const [loggedUser,setLoggedUser] 
    = useState(JSON.parse(localStorage.getItem("nutrify-user")));
    const [role, setRole] = useState(null);
  
      const handleLogin = (userRole) => {
          setRole(userRole);
      };
  
      const handleRegister = (userRole) => {
          setRole(userRole);
      };
  
    return (
      <>
      
      <div>
              {role ? (
                  
                  <>
                      {role === 'patient' && <PatientInterface />}
                      {role === 'doctor' && <DoctorInterface />}
                      {role === 'government_assistant' && <GovernmentAssistantInterface />}
                  </>
              ) : (
                  
                  <>
                      <UserContext.Provider value={{loggedUser,setLoggedUser}}>
  
  <BrowserRouter>   
  
      <Routes>
      
        
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login onLogin ={handleLogin}/>}/>
          <Route path='/register' element={ <Register onRegister={handleRegister} />}/>
          <Route path='*' element={<Notfound/>}/>
  
      </Routes>
  
    </BrowserRouter>
  
  
  </UserContext.Provider>
  </>
              )}
          </div>
        
      </>
    )
}

export default Page