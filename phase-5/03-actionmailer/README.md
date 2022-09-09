# ActionMailer Example

This includes how to send a basic email on account generation and several routes involved with resetting a password.

## Getting Started

The first thing to do is check out the `config/environments/development.rb` file. There you can see a few lines for configuring our SMTP server. In my case I'm using a built in google feature to relay my email requests. In order to set that up, go to any google page, click your profile account to go to settings, and then go down to security. Under `Signing In To Google` choose `App passwords`. Under `Select App` choose other and give it a name that makes sense like `Rails Mailer`. This will display a password which we'll copy down for later.

You'll change this line in the development file:

```rb
config.action_mailer.raise_delivery_errors = false
```

So that it reads:

```rb
config.action_mailer.raise_delivery_errors = true
```

(This is to get a verbose message when things fail to mail).

Additionally, you'll add in these lines:

```rb
config.action_mailer.smtp_settings = {
  :address        => 'smtp.gmail.com',
  :domain         => 'mail.google.com',
  :port           => 587,
  :user_name      => 'your email @gmail.com',
  :password       => 'the password we copied',
  :authentication => :plain,
  :enable_starttls_auto => true
}
```

Note that the `username` and `password` are your email address and the password we copied up above. To make these more secure, you can instead use something similar to dotenv or figaro in order to hide your address and password under environmental variables. If you do so, the lines you add will look more like this:

```rb
config.action_mailer.smtp_settings = {
  :address        => 'smtp.gmail.com',
  :domain         => 'mail.google.com',
  :port           => 587,
  :user_name      => ENV['MAILER_EMAIL'],
  :password       => ENV['MAILER_PASSWORD'],
  :authentication => :plain,
  :enable_starttls_auto => true
}
```

Very importantly, the email listed is the `from` address when our ActionMailer emails are sent. For your convenience, the `dotenv-rails` gem has been included in case you'd like to save those variables in a `.env` file.

## Creating A Welcome Email

The next thing to do is to set up your normal rails resources for things like users. Very importantly, a user needs to have an `:email` attribute. In my case I also gave them normal password authentication as well as an attribute to check whether their email has been validated (you can use this to restrict user actions before the email has been validated).

The next thing to do is create a new mailer. Run this command in the terminal `rails g mailer users`.

This creates a new `UsersMailer` for us to utilize and send emails to our users. In some ways this is a sort of second step to our controller. Create a new method in there called `welcome` sort of like this:

```rb
def welcome
  @user = params[:user]
  mail to: @user.email, subject: "Welcome #{@user.username} to Testing123!"
end
```

It's VERY IMPORTANT that any variables we use later on are instance variables or else they won't get passed to our email views later.

The `params[:user]` is something that we'll actually pass in later from the `UsersController`, don't worry too much about it. What's more interesting is the `mail to:` line.

The `mail` method takes in two arguments, an email address (in this case the address tied to a newly created user) and a subject which will be the subject line of the email sent.

Okay, we've got the basics all set up. Now to write out the actual email itself.

Inside of `/app/views` create a new directory called `user_mailer`. This is where all the views (the email templates) will go. We're going to create two similar files, one called `welcome.html.erb` and one called `welcome.text.erb`. The names here matter. Our `UserMailer` class matches the `user_mailer` directory and the `welcome` method matches our two `.erb` files.

Why two files? One of them is for a richer experience and can include all sorts of things like styling and html elements, the other is in case our recipients have turned off those features and are receiving emails as text only.

Inside of our `welcome.html.erb` file we'll add in these lines:

```html
<h1>Welcome to Testing123, <%= @user.username %>!</h1>
<p>
  You have successfully signed up to Testing123
  your username is: <%= @user.username %>.<br>
</p>
<p>You can validate your email here: <a href="http://localhost:3000/users/<%= @user.id %>/validate/">Link</a> </p>
<p>Thanks for joining and have a great day!</p>
```

Those strange tags that look like `<%= %>` are `erb` tags, in other words extensible ruby. This is how we directly interpolate ruby code into our html. We can access instance variables from the `welcome` method but if we'd specified more of those, we'd have access to them as well.

The final thing I've done is added a link to validate the user. This would probably be more secure with a randomly generated key but for our purposes, we've done it more simply.

Currently that link goes nowhere so we need to create one in the routes. I specifically created a new controller called `LinkViewsController` but you can make this route go anywhere you'd like including to a real mail server or even a deployed website!

See if you can follow everything that happens after a user clicks on the link in their email.

## Layout

You can wrap your emails in a specific layout using the `layouts` inside of `views`. If you play around with the `mailer.html.erb` and `mailer.text.erb` files you'll notice that changing them will also change the "wrapper" around your emails. This can be handy if you'd like a specific format for each email you send.

Very importantly, you must always have the `<%= yield %>` which is where the mailer will plug in your specific html or erb template inside the generic layout.

## Password Reset

The password is a little trickier here because this can require multiple steps and more specifically a password_reset_token.

Start in the migrations file and see if you can follow what was created.

Look at the methods for the `User` model.

From there, look at routes and the `passwords_controller`.

End your tour of the password reset with the `passwords_mailer` and the matching file in the `views` directory.
