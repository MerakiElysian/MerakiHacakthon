import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Patient from './patient';
import Precautions from './Precautions'
import Profile from './Profile';
import Slogans from './Slogans'


function PatientInterface() {
    return (
        <>
        
<BrowserRouter>

          <Patient/>

     
        <Routes>

          <Route path='/profile' element={<Profile/>}/>
          <Route path='/slogans' element={<Slogans/>}/>
          <Route path='/precautions' element={<Precautions/>}/>


        </Routes>
     
     
     </BrowserRouter>
        
    </>
    );
}

export default PatientInterface;