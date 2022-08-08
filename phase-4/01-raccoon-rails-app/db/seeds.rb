r1 = Raccoon.create(name: "Romeo", age: 8, has_rabies?: true)
r2 = Raccoon.create(name: "Juliet", age: 6, has_rabies?: false)

Dumpster.create(color: "green", size: "extra large", has_trash: true, location: "behind Chipotle")

Garbage.create(content: "gruyere cheese", smelliness: 9, raccoon_id: r1.id, dumpster: Dumpster.first)
Garbage.create(content: "munster cheese", smelliness: 8, raccoon_id: r2.id, dumpster: Dumpster.first)
