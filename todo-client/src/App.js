
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';

const userCredentials = {
  name: "musharruf",
  password: 123
};

function App() {
  const [loggedIn, setLoggedIn] = useState(0);
  return (
    <>
      {loggedIn == 1 ? (
        <>
          <NavBar setLoggedIn={setLoggedIn} />
          <Home />
        </>

      ) : (
        <Login userCredentials={userCredentials} setLoggedIn={setLoggedIn} />

      )}
    </>
  );
}

export default App;
