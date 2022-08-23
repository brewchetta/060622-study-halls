import { useState } from 'react'

function Signup({user, setUser}) {

  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState(null)

  const handleSignup = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('username', username)
    formData.append('password', password)
    formData.append('avatar', avatar)

    fetch('/users', {
      method: 'POST',
      body: formData
    })
    .then(res => {
      if (res.ok) {
        res.json()
          .then(data => {
            console.log(data)
            setErrors([])
            setUser(data)
          })
      } else {
        res.json()
        .then(({errors}) => setErrors(errors))
      }
    })
  }

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)
  const handleChangeAvatar = e => setAvatar(e.target.files[0])

  if (user.id) {
    return (
      <div/>
    )
  }

  return (
    <div>
      <form onSubmit={handleSignup}>

        <p>Signup:</p>

        <input
          type="text" onChange={handleChangeUsername} value={username} placeholder='username'
        />

        <input
          type="text" onChange={handleChangePassword} value={password} placeholder='password'
        />

        <input
          type="file" onChange={handleChangeAvatar}
        />

        <input
          type="submit" value="Signup"
        />

      </form>
    </div>
  )
}

export default Signup
