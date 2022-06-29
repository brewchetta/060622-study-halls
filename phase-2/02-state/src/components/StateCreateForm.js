function StateCreateForm(props) {

  // something important goes here if we want a controlled form...

  return (
    <form>

      <input type="text" name="name" />

      <input type="text" name="flag_url" />

      <input type="submit" value="Create New State" />

    </form>
  )
}

export default StateCreateForm
