import { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Fragment>
        
        {/* <Route path='/' Component={Landing}/> */}
        <section>
          <Routes>
            <Route path='/profile' Component={Profile}/>
            <Route path='/Register' Component={Register}/>
            <Route path='/Login' Component={Login}/>

          </Routes>
        </section>
        <Landing/>
      </Fragment>

    </Router>
    
    );
}

export default App;
