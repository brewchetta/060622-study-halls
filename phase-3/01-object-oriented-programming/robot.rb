class Robot

  # THIS CREATES THE GETTER
  # attr_reader :name

  # def name
  #   @name
  # end

  # THIS CREATES THE SETTER
  # attr_writer :name

  # def name=(new_name)
  #   @name = new_name
  # end

  # THIS CREATES THE GETTER & SETTER
  attr_accessor :name, :hamburger

  # def name
  #   @name
  # end
  #
  # def name=(new_name)
  #   @name = new_name
  # end

  def initialize(name)
    @name = name
    puts "DOING COMPLICATED CALCULUS FOR BUILDING ROBOT #{@name}"
    @hamburger = "HAMBURGER"
  end

  def state_name
    "Designation: #{self.name}"
  end

  def who_am_i
    self
  end

  def rename
    self.name = "#{@name}TRON"
  end

  def add_binary_to_name
    if @name.length < 20
      self.name = @name + "0"
      self.add_binary_to_name
    end
  end

end
