import React, {useEffect} from 'react';
import {Login} from './containers/login';
import querystring from 'querystring';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';


const App = () => {

  useEffect(() => {
    const {pathname, search} = window.location;
    if(pathname === '/callback') {
      const {code} = querystring.parse(search.substring(1))
      console.log(code);
    }
  }, [])

  return (
    <div className="container">
      <Login />
    </div>
  );
}

export default App;
