import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import './App.css'
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignup = (username) => {
    setCurrentUser(username);
  };

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  const handleSignout = () => {
    setCurrentUser(null);
  };

  return (
    <div>
      {currentUser ? (
        <div>
          <h1>Welcome, {currentUser}!</h1>
          <img src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg" alt="user" /><br />
          <button onClick={handleSignout}>Sign out</button>
        </div>
      ) : (
        <>
          <LoginPage onLogin={handleLogin} />
          <SignUp onSignup={handleSignup} />
        </>
      )}
    </div>
  );
}

export default App;
