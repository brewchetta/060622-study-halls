import { useState } from 'react'

function Login({user, setUser}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      if (res.ok) {
        res.json()
          .then(data => {
            console.log(data)
            setError('')
            setUser(data)
          })
      } else {
        res.json()
        .then(({error}) => setError(error))
      }
    })

  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  if (user.id) {
    return (
      <div/>
    )
  }

  return (
    <div>
      <form onSubmit={handleLogin}>

        <p style={{color: 'red'}}>{error ? error : null}</p>

        <p>Login:</p>

        <input
          type="text" onChange={handleChangeUsername} value={username} placeholder='username'
        />

        <input
          type="text" onChange={handleChangePassword} value={password} placeholder='password'
        />

        <input
          type="submit" value="Login"
        />

      </form>
    </div>
  )
}

export default Login
