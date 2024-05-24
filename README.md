# React Image Gallery

## Description

This is a project learning to use React and CRUD to show that I have a handle on the different parts of the stack. I did that by creating a full-stack shopping list app.

## Requirements

We want to store a list of items to buy in a database, so we can build up our list over a period of time and then go shopping.

There should be a form at the top of the page where we can add new items to the list.

Each item can have a:

Name - text, allow up to 80 characters (required)
Quantity - allow for decimal numbers (required)
Unit - text, allow up to 20 characters (optional)
When the page first loads, all the existing items should be displayed with the quantity & unit combined together for display. Each item should also have an option to remove it from the list or mark it as purchased. Once purchased, the buttons should be hidden and the item should show as "Purchased".

Items should initially appear alphabetically, but as items are marked purchased they should sort to the end of the list.

The Reset button should clear the purchased status from all items, allowing the list to be re-used. The Clear button should remove all items from the list, deleting them from the database.

Add a confirmation dialog to the reset and clear button so that when the user clicks, they are prompted to confirm whether they really want to perform that action.

Add indicators to the UI to show which fields are required. On Save, validate that all inputs have a value.

On the client side, you can do this by making the HTML inputs required.
However you should also do this on the server side and send back a friendly message if the required data is not provided.
Optionally, make sure the text entered isn't too long.

## Built With

HTML,
CSS,
JavaScript,
Node.js,
Express,
Axios,
PostegreSQL,
Postico,
Bootstrap,
React

## Acknowledgement

Thanks to Emerging Digital Academy who equipped and helped us to make this application a reality.

## Support

If you have suggestions or issues, please email me at scott.r.schulte@gmail.com.
