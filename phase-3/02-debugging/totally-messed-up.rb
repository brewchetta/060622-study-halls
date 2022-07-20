class brokenStuff

  attr_accessor :message :fav_number

  def initalize(message, fav_number)
    @message = message
    @fav_number = fav_number
  end

  def message(@message)
    @message
  end

  def message=(new_message)
    self.message = new_message
  end

  def print_each_letter
  @message.each do |letter|
    puts letter
  end

end

binding.pry
