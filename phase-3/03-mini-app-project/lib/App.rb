class App

  def initialize
    greet
    menu
  end

  def greet
    puts "Welcome to our Llama Pharma".cyan
    puts "--Where We Don't Test On Llamas I Swear--".cyan
  end

  def menu
    puts "Options:"
    puts "1 - Find a Llama by name"
    puts "2 - Adopt a Llama"

    print ">>"
    user_input = gets.chomp

    if user_input == "1"
      self.find_llama
    elsif user_input == "2"
      self.sponsor_llama
    end

  end

  def find_llama
    puts "What is the name of the llama you want to find?"

    user_input = gets.chomp

    found_llama = Llama.find_llama_by_name(user_input)

    puts "Name: #{found_llama.name}"
    puts "Breed: #{found_llama.breed}"
    puts "Number of Pets: #{found_llama.current_pets}"

    menu
  end

  def sponsor_llama
    puts "Which Llama would you like to sponsor?"

    Llama.all.each_with_index do |llama, index|
      puts "#{index + 1} - #{llama.name.cyan}"
    end

    print ">>"
    user_input = gets.chomp

    llama_index = user_input.to_i - 1
    found_llama = Llama.all[llama_index]

    found_llama.sponsor = Sponsor.all.sample

    puts "This llama's new sponsor is #{found_llama.sponsor.company} - #{found_llama.sponsor.slogan}"

    menu
  end

end
