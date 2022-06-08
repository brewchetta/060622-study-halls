# Study Hall - 6/8

## Pair Programming Assignment

### I Heard You Like Cat Pictures

You'll mainly be working in `src/index.js` today creating a very simple image uploader. Before you do, be sure to go through each file to so that you feel comfortable with the code that's already been written out.

You can open the html in your computer with `open index.html` or a similar command.

Please note that nothing needs to persist (if you reload the page the page shouldn't have cat pictures again).

For this assignment you're attempting to build out two pieces of functionality:

### 1. Add A Random Cat On Click

When a user clicks the `Add Random Cat Pic` button, get a random image from the `data` array.

Use the random object to create and append a new image in the `#images-container` that has a similar format to this:

```
<div class="cat-image">
  <h2>Cleocatra</h2>
  <img src="https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg" alt="Cleocatra" />
  <button>Remove</button>
</div>
```

You may have to create and append multiple elements to another element which you can then append to the container.

### 2. Remove Button Removes Image

When someone clicks the `Remove` button, it will remove its container div. You may have to add an event listener to the button when it gets created...

When thinking of how to remove the div, remember that you can get the button's parent and then you can remove that!

### 3. Remove All Cats

Add a new button to the DOM (you can do this in the HTML) which when clicked removes ALL the `.cat-image` divs.

### 4. [BONUS] Submit New Image

Create a form which when submitted allows you to create a new `.cat-image` by submitting a name and url. This change doesn't have to persist when you reload the page.

### Tips and Tricks:

Break the process down into smaller chunks. If we need to create multiple elements, first think of how to create each element individually.

You don't append all the elements directly to the `#images-container`, rather you ought to create a new `.cat-image` div to contain your new elements and then append the `.cat-image` to the `#images-container`.

When thinking of how to get a random image, remember that you're allowed to search the internet!

The `Remove` button can be tricky due to timing. Remember that you're still using `addEventListener`. When is a good time to add the new event listener? When does the `Remove` button exist?
