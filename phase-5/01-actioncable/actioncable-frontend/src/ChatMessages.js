function ChatMessages({chatMessages}) {

  return (
    <div>

      {chatMessages.map(message => {
        return <p key={message.id}>{message.content} - {message.user?.name}</p>
      })}

    </div>
  )

}

export default ChatMessages
