puts "Making drugstores..."

d1 = Drugstore.create!(name: "Duane Reade", location: "The Bronx")
d2 = Drugstore.create!(name: "Ulises' Pharmacy", location: "Dyckman")

puts "Made some drugstores!"

puts "Making customers..."

c1 = Customer.create!(name: "Tony Montana", member: true, age: 18)
c2 = Customer.create!(name: "Pablo Escobar", member: false, age: 34)
c3 = Customer.create!(name: "El Chapo", member: false, age: 40)

puts "Made some customers!"

puts "Making prescriptions..."
Prescription.create!(name: "Aderall", dosage: 800, legality: true, drugstore: d1, customer: c1)
Prescription.create!(name: "Antidepressents", dosage: 320, legality: true, drugstore: d2, customer: c2)
Prescription.create!(name: "Robitussin", dosage: 1000, legality: false, drugstore: d2, customer: c3)
Prescription.create!(name: "Devil's Lettuce", dosage: 10000, legality: false, drugstore: d1, customer: c2)
puts "Made prescriptions!"

puts "Done seeding!"
