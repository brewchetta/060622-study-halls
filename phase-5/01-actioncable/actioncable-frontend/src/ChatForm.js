import { useState } from 'react'

function ChatForm({handleSubmit, setInput, input}) {
  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        onChange={e => setInput(e.target.value)}
        placeholder='Type your message here'
        value={input}
      />

      <input type="submit" value='Send' />

    </form>
  )
}

export default ChatForm
