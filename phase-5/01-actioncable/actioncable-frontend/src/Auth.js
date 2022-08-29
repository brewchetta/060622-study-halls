import { useState } from 'react'

function Auth({currentUser, setCurrentUser}) {

  const [name, setName] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({name})
    })
    .then(res => res.json())
    .then(res => {
      if (res.id) {
        setCurrentUser(res)
        setName('')
      } else {
        alert("Invalid credentials")
      }
    })
  }

  const handleLogout = () => setCurrentUser({})

  if (!currentUser?.id) {

    return (
      <form onSubmit={handleLogin}>
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />

        <input type="submit" value='Login' />
      </form>
    )

  } else {

    return (
      <p>Welcome {currentUser.name}! <button onClick={handleLogout}>Logout</button> </p>
    )

  }
}

export default Auth
