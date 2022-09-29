// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    // const userName = inputEl.current.value
    onSubmitUsername(username)
  }

  function handleChange(event) {
    const inputValue = event.target.value
    // const isValid = inputValue === inputValue.toLowerCase()
    setUsername(inputValue.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="UserName">Username:</label>
        <input
          onChange={handleChange}
          id="UserName"
          type="text"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
