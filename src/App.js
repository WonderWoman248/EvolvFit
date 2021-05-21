import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import MenuBar from './Components/MenuBar';
import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import User from './Pages/User'
import './home.css'
import './login.css';

function App() {
	return (
    <BrowserRouter>
      <div className='App'>
        <MenuBar className='menu-bar' />
        <Route exact path='/EvolvFit' component={Home} />
        <Route exact path= '/EvolvFit/login' component={Login}/>
        <Route exact path= '/EvolvFit/admin' component={Admin}/>
        {/* <Route exact path= '/user' component={User}/> */}
      </div>
		</BrowserRouter>
	);
}

export default App;
