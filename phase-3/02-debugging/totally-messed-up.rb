require 'pry'

class BrokenStuff

  attr_accessor :message, :fav_number

  def initialize(message, fav_number)
    @message = message
    @fav_number = fav_number
  end

  # def message(@message)
  #   @message
  # end

  # def message=(new_message)
  #   @message = new_message
  # end

  def print_each_letter
    # binding.pry
    @message.each_char do |letter|
      puts letter
    end
  end

end

binding.pry
