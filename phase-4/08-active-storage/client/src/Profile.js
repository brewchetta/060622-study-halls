function Profile({user}) {
  return (
    <div>
      <br/>
      {user.username}
      <img src={user.avatar_url} alt={'an avatar!'} />
    </div>
  )
}

export default Profile
