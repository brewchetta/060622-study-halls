import { useState, useEffect } from 'react'
import Auth from './Auth'
import Chat from './Chat'

function App({cable}) {

  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch('/me')
      .then(res => res.json())
      .then(user => {
        if (user.id) {
          setCurrentUser(user)
        }
      })
  }, [])

  return (
    <div className="App">

      <h1>ActionCable Test</h1>

      <Auth {...{currentUser, setCurrentUser}} />

      <Chat cable={cable} />

    </div>
  );
}

export default App;
