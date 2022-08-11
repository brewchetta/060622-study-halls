j1 = Jockey.create!(name: "Pedro", weight: 110, height: 51)
j2 = Jockey.create!(name: "Holt", weight: 250, height: 47)
j3 = Jockey.create!(name: "The Incredible Hulk", weight: 1040, height: 92)

Horse.create!(name: "Speedy", breed: "Arabian", speed_mph: 60, jockey_id: j1.id)
Horse.create!(name: "Roach", breed: "Mustang", speed_mph: 4, jockey_id: j1.id)
Horse.create!(name: "Rocky", breed: "Italian Stallion", speed_mph: 80, jockey_id: j2.id)
Horse.create!(name: "Flash", breed: "Shetland Pony", speed_mph: 1, jockey_id: j3.id)
