import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import loginPage from '../src/Page/LoginPage';

function App() {  
  const LoginPage = loginPage;
  return (
    <BrowserRouter>
    <form>
        <div> </div>
        <Routes>
        <Route exact path='/login' element={<LoginPage/>}></Route>
        </Routes>
    </form>
    </BrowserRouter>
    
    );
}

export default App;
