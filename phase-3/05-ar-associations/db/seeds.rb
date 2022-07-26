puts "Seeding farms and sponsors"

3.times do
  Farm.create(name: Faker::Name.name, location: Faker::Address.city)
end

3.times do
  Sponsor.create(name: Faker::Sports::Football.team)
end

puts "Seeding Vicunas"

Vicuna.create(name: "Peaches", farm: Farm.all.sample, sponsor: Sponsor.all.sample)
Vicuna.create(name: "Lil' Timmy", farm: Farm.all.sample, sponsor: Sponsor.all.sample)

puts "Vicunas seeded"
