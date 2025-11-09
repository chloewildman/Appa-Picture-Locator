# Chloe Wildman's Assignment 2 - Asynchronous Web App Development

To meet the assignment requirements, I built a page to sort photos of my dog Appa from photos of random objects.

To test this page, please try the following test cases:
- Drag a photo of Appa into the "APPA" container. You will receive two success visual cues:
    - A green indicator in the dropzone
    - A message above the dropzones that says "Yes! That's correct!"
- Drag a photo of a random object into the "NOT APPA" container. You will receive two success visual cues:
    - A green indicator in the dropzone
    - A message above the dropzones that says "Yes! That's correct!"
- Drag a photo of Appa into the "NOT APPA" container. You will receive two fail visual cues:
    - A red indicator in the dropzone
    - A message above the dropzones that says "Um...No..."
- Drag a photo of a random object into the "APPA" container. You will receive two fail visual cues:
    - A red indicator in the dropzone
    - A message above the dropzones that says "Um...No..."

## Inspiration/Acknowledgements/Previous Experience

### Module 2 Wednesday Lecture Code

This example informed my basic structure of my JS. Here are the key items I used as inspiration:
- Folder structure
- General formatting/implementation of async and await API code
- Use of Math.random()
- General formatting of drop event

Here are the key ways I adapted this for my own project:
- I had to modify the way that the child gets appended. I noticed that if I dropped an image on top of one that is already in the dropzone, it got appended to the existing child image, rather than becoming a child in the container. 
- To meet assignment requirements, the await portion is not inside a button event listener. It is run on page initialization.
- My items differed from the items in lecture (canvas shapes versus images separated into two arrays), therefore my implementation of populating those items was very different from the example in our lecture.
- The use case of Math.random() is very different. In the lecture, it created a unique ID so that each button click could create new shapes with new IDs. In my implementation, I used it to create a unique sort key for the images to be shuffled on page initialization.
- The formatting of the drop event from the lecture example informed the basics of this portion of code, but I made it my own by adding onto successful drop events as well as adding an "else if" condition to offer responses to incorrect drops.

### WAD100 Course

The use of reset.css and some CSS was inspired by the WAD100 course. Here are the key items I used as inspiration:
- The use of reset.css (not really able to make this one unique!)

### Previous experience

In my day job, I was tasked with customizing a Help Center for my team, so I have some existing exposure and comfort with CSS.

### Online resources

Resource I used when creating images in JS from JSON: https://www.geeksforgeeks.org/javascript/how-to-create-an-image-element-dynamically-using-javascript/

I struggled pretty badly with wanting to give immediate feedback on hover. Looks like dragenter/dragleave are not able to access id https://stackoverflow.com/questions/11065803/determine-what-is-being-dragged-from-dragenter-dragover-events

## Explanation of Drag-and-Drop functionality and decisions

### dragover
I prevented the default to permit dropping. I also added a blue background color to the dropzone to indicate that it is a valid drop point.

### dragleave
On this event, I removed the background color. Without this, if you drag an image and then do not drop it in the location where you grabbed it, the background color remains blue.

### drop
I made a few functions under the "Helper functions" code comment to clean up the inside of this code. I wanted to provide both a visual cue and a written DOM message to indicate correctness or incorrectness.
- feedback() takes in the current dropzone and a color, changes the dropzone background color to that color, and then resets it after 300 ms
- failMessage() and successMessage() get the confirmationMessage element and add a relevant fail/success message to the inner HTML, and then calls on presentMessage() to complete the response
- presentMessage() takes in the unique message and modifies the relevant "message" CSS properties to fade the message in and out of view, and resets the inner HTML of the confirmationMessage.

These are then implemented on the drop event listener to provide a visual response when the dropzone and the set name match or do not match.

## How My Project Meets Minimum Requirements
### JSON Requirements
- I have a JSON file containing two distinct sets, "APPA" and "NOT APPA".
- JSON is valid using the validator: http://jsonlint.com/
- I used VSCode and the Live Server extension to serve the JSON file.

### HTML Requirements
- Designed a basic HTML layout to display the data.
- imgContainer is an empty container to receive the JSON.
- Created two separate dropzones for the two categories, labeled "APPA" and "NOT APPA".
- Valid: http://validator.w3.org/

### JS Requirements
- Used async and await to fetch the JSON data when the application initializes.
- High-order functions and looping (examples)
    - I used map() to loop through each image in each category to collect a single array of images. 
    - I used forEach() to loop through each item and assign a random number so that I could sort the images into a random order.
    - I used forEach() to call on my populateImage() function from my populateImage.js module and appended each item to the container.
    - I used forEach() to loop through the zones and add event listeners, along with the actions to respond to those events.
        - For example, with the drop listener, I used some additional functions to reflect a correct drop versus an incorrect drop (see <b> How My Project Exceeds Minimum Requirements</b>).
- Drag & Drop functionality
    - populateImage() in populateImage.js takes images and tags each element with its set/category name and registers the dragstart event listener.
    - zones.forEach() in app.js establishes dragover and drop events to fire.

### CSS Requirements
- Valid: http://jigsaw.w3.org/css-validator/ 

## How My Project Exceeds Minimum Requirements
- Implementing a theme with relevant CSS styling.
- Shuffling the order of photos when the website is initialized.
- Visual cues for correct/incorrect answers, including writing messages to the DOM.
- Setting dragleave so that the dragover effects will not linger when a choice isn't selected or dropped successfully.
- Adding alt text and titles to images.
- Making page responsive to screen size.