chett = User.create!(name: "Chett")
duncan = User.create!(name: "Duncan")

g_room = Room.create!(name: "Green")
o_room = Room.create!(name: "Orange")

o_room.messages.create!(content: "Hello Duncan", user: chett)
o_room.messages.create!(content: "Hello Chett, how are you?", user: duncan)
o_room.messages.create!(content: "I am well", user: chett)

g_room.messages.create!(content: "What's up party people, welcome to the Green Room!", user: chett)
