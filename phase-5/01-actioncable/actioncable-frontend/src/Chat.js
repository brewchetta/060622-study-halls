import { useEffect, useState } from 'react'
import ChatMessages from './ChatMessages'
import ChatForm from './ChatForm'

function Chat({cable}) {

  // state for chat messages
  const [chatMessages, setChatMessages] = useState([])
  const [rooms, setRooms] = useState([])
  const [currentRoomId, setCurrentRoomId] = useState(1)

  const [chatInput, setChatInput] = useState('')

  // on load get the available rooms
  useEffect(() => {
    fetch('/rooms')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(data => {
          setRooms(data)
          setCurrentRoomId(data[0].id)
        })
      }
    })
  }, [])

  // on load get all chats for a room (we'll change this to current room later)
  useEffect(() => {
    fetch(`/rooms/${currentRoomId}/messages`)
      .then(res => res.json())
      .then(data => setChatMessages(data))
  }, [currentRoomId])

  useEffect(() => {

    const channel = cable.subscriptions.create(
      { channel: "HamburgersChannel", room_id: currentRoomId },
      { received: (newMessage) => setChatMessages(previousMessages => [...previousMessages, newMessage]) }
    )

    return () => channel.unsubscribe()

  }, [currentRoomId])

  // ---------------------- //
  // for the subscriptions (connection)
  // we can unsubscribe with channel.unsubscribe()
  // we'll probably put the above into a useEffect
  // ---------------------- //

  // we need a handle submit for when we submit a new chat...
  const handleSubmit = e => {
    e.preventDefault()

    fetch(`/rooms/${currentRoomId}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({content: chatInput})
    })
  }

  const roomOptions = rooms.map(r => <option key={r.id} value={r.id}>{r.name}</option>)

  return (
    <div>

      <ChatMessages chatMessages={chatMessages} />
      <ChatForm setInput={setChatInput} input={chatInput} handleSubmit={handleSubmit} />

      {/* The select tag here is to choose the current room once we implement that */}
        <select
          onChange={e => setCurrentRoomId(e.target.value)}
          value={currentRoomId?.id}
        >
          { roomOptions }
        </select>


    </div>
  )
}

export default Chat
