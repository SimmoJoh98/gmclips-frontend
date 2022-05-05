import './App.css';
import UserContext from './components/userContext/userContext';
import GuestLanding from './views/guest-landing/guest-landing';
import Registration from './components/register/register-component';
import UserLanding from './views/user-landing/user-landing-component';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Switch, Link} from 'react-router-dom';

function App() {
  const [usr, setUsr] = useState('')

  return (
    <>
      <UserContext.Provider value={{usr, setUsr}}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<GuestLanding/>} />
            <Route exact path="/signup" element={<Registration />} />
            <Route exact path="/userfeed" element={<UserLanding/>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;