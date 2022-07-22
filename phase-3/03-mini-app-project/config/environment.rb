require 'rubygems'
require 'bundler/setup'
Bundler.require(:default)

require_all "lib"

EnergyDrink.new("It gives you Wool", "Red Alpacka", "VERY 10", 10)
EnergyDrink.new("Pull the lever", "Cuzco's Poison", "DEATH", Float::INFINITY)
EnergyDrink.new("This is definitely not llama pee", "Llama Pee", "refreshing 1", 666)

SweaterCompany.new("Packing the wooliest in the world", "Alpacka", "VERY 10", 10)
SweaterCompany.new("Good sweaters", "Wooly World", "5/7", 50000)

Llama.new("Frank", "medium")
Llama.new("Demetry", "woolie")
Llama.new("Francis", "classic")
Llama.new("Cuzco", "vicunas")
Llama.new("Francesco", "classic")
