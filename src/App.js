import logo from './logo.svg';
import './App.css';
import Login from './components/Auth/Login';
import Dashboard from './components/Auth/dashboard/Dashboard';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { authSession } from './context/authSession';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username) => {
    setLoggedIn(true);
    setIsLogin(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setIsLogin(false);
    setUsername('');
  };

  return (
    <div className="App">
      {/* <AuthSession>

      </AuthSession> */}
      {
        (!loggedIn) ? <Login onLogin={handleLogin} /> : <Dashboard username={username} onLogout={handleLogout} />
      }
      
      

      
    </div>
  );
}

export default App;
