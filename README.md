# React Image Gallery

## Description

This is a project learning to use React and CRUD to show that I have a handle on the different parts of the stack. I did that by creating a full-stack photo gallery app.

## Requirements

A database was created called react-gallery. A few images were added to the public/images folder. These were added via insert statement on Postico. Each item in the gallery provided a url, title, description and likes (defaults to 0).

The database was then used to build a gallery app using multiple components: App, Header, GalleryList, GalleryItem, ToggleItem, and GalleryForm.

GalleryList and GalleryItem were used to render the database onto the DOM via localhost.

ToggleItem was used with conditional rendering to be able to toggle between showing the image and description on click of either. 

A 'like' button was added that, when clicked, fires off a PUT request to add a 'like' to the talley, resulting in the number of 'likes' changing on the DOM.

GalleryForm was added to allow a user to POST a new gallery item. 

A DELETE route was also added with a button to allow the user the ability to delete gallery items. 

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

Thanks to Emerging Digital Academy who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at scott.r.schulte@gmail.com.
