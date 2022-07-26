# Practice Code Challenge - Pet Shelter

## Introduction

A local pet shelter has tapped you to build their database and connect it with Active Record.

## Getting started

run `bundle install`

## Migrations

Create your migrations.

- `Shelters` should have a `name` and an `address`

- `Pets` should have a `name`, an `age_in_years`, a `species`, a boolean for `adopted?`, a `shelter_id`, and a `adopter_id`

- `Adopters` should have a `first_name` and a `last_name`

#### `shelters` Table

| Column | Type |
| --- | --- |
| name | string |
| address | string |

#### `pets` Table

| Column | Type |
| --- | --- |
| name | string |
| age | integer |
| species | string |
| adopted? | boolean |
| shelter_id | integer |
| adopter_id | integer |

#### `adopters` Table

| Column | Type |
| --- | --- |
| first_name | string |
| last_name | string |

## Relationship

- What associations will this need?
- (i.e. `has_many`, `has_many through`, and `belongs_to`)

## Shelter

- `Shelter#pets` returns all pets associated with the shelter
- `Shelter#adopters` returns all the people who have adopted from this shelter
- `Shelter#current_pets` returns only the pets associated with the shelter who haven't been adopted
- `Shelter#adopted_pets` returns only the pets associated with the shelter who have been adopted

## Pet

- `Pet#shelter` returns an instance of the shelter that pet is associated with
- `Pet#adopter` returns an instance of the person who adopted the pet, if any
- `Pet.oldest` returns the oldest pet by age
- `Pet.average_age` returns the average age of all pets
- `Pet#in_dog_years` returns the age in dog years of a pet if their species is `dog` (one human year is roughly five dog years and yes I know this is a gross oversimplification)

## Adopter

- `Adopter#pets` returns all pets adopted by this person
- `Adopter#shelters` returns every shelter the person has adopted from
- `Adopter#full_name` returns the adopter's combined first and last names
- `Adopter#adopt(pet)` takes in an instance of a `Pet`, changes the pet's `adopted?` status to true, and associates the pet with the adopter if they're not already adopted
- `Adopter#fav_pet` returns the type of pet (species) they've adopted most of or `nil` if they've adopted no pets

## Reminder

Even older pets need love!
