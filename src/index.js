import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import LogIn from './Components/LogIn';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import MainPage from './Pages/MainPage';
import Error from './Components/Error';
import UserPage from './Pages/UserPage';
import DeveloperPage from './Pages/DeveloperPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/'  element={<LogIn />}/>
           <Route path='/main/*' element={<MainPage/>}/>
           <Route path='/qa/*' element={<UserPage/>}/>
           <Route path='/developer/*' element={<DeveloperPage/>}/>
          <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
