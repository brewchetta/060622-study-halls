puts "Now seeding all the things..."

a1 = Adopter.create!(first_name: "Alan", last_name: "Chavez")
a2 = Adopter.create!(first_name: "Marguerite", last_name: "Andreca")
a3 = Adopter.create!(first_name: "Heman", last_name: "Vaidya")
a4 = Adopter.create!(first_name: "Hammad", last_name: "Faiz")

s1 = Shelter.create!(name: "ASPCA", address: "America")
s2 = Shelter.create!(name: "Flatiron School", address: "11 Broadway")
s3 = Shelter.create!(name: "Sesame Street", address: "Sesame Street")

Pet.create!(name: "Bungus", age: 7000, species: "stegosaurus", adopted?: true, shelter: s1, adopter: a1)
Pet.create!(name: "Koji", age: 2, species: "dog", adopted?: true, shelter: s2, adopter: a2)
Pet.create!(name: "Harambe", age: 17, species: "gorilla", adopted?: true, shelter: s3, adopter: a3)
Pet.create!(name: "Toby", age: 3, species: "dog", adopted?: false, shelter: s2, adopter: nil)
Pet.create!(name: "Toblerone", age: 10, species: "chocolate", adopted?: false, shelter: s2, adopter: nil)
