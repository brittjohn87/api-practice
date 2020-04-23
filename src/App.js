import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { login } from './ducks/login/actions';
import {Login} from './containers/login';
import {UserPanel} from './components/user-panel';
import querystring from 'querystring';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';


const App = () => {
const dispatch = useDispatch();
  useEffect(() => {
    const {pathname, search} = window.location;
    if(pathname === '/callback') {
      const { code } = querystring.parse(search.substring(1))
      dispatch(login({ code }));
    }
  }, [])

  return (
    <div className="row" style={{'height': '100vh'}}>
      <div className="col-3" style={{'backgroundColor': 'black'}}>
        <UserPanel />
      </div>
      <div className="col-9">
        <Login />
      </div>
    </div>
  );
}

export default App;
