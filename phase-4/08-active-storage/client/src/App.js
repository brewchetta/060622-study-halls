import { useState, useEffect } from 'react'

import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'

function App() {

  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('/me')
    .then(res => {

      if (res.ok) {
        res.json()
        .then(user => {
          console.log(user);
          setUser(user)
        })
      }

    })
  }, [])

  const handleLogout = () => {
    fetch('/logout', {method: 'DELETE'})
    setUser({})
  }

  return (
    <div className="App">
      <Login user={user} setUser={setUser} />
      <Signup user={user} setUser={setUser} />

      { // conditional logout button
        user.id
        ?
        <button onClick={handleLogout}>Logout</button>
        :
        null
      }

      <Profile user={user} />

    </div>
  );
}

export default App;
