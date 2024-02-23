# Toby's Music Journal
### Module 2 Assignment for RevoU FSSE Amsterdam
#### By Tobias Agyasta (Team 2)

[**Website preview using Netlify**](https://tobys-music-journal.netlify.app/)

## How to Open

In order to open the website, you can open the deployed website in netlify through the link above, or you can clone the repo by Github and run your own live server.

## About

![Logo image](assets/news-items/Black%20and%20White%20Modern%20Vintage%20Badge%20Brand%20Logo.png)

This is my submission for the Module 2 assignment. This is a website that serves as a blog on music appreciation and culture. 

In this website, I added a lot of customization as per what's required for the assignment, and will later add more content as per what's stated in the advanced portion of the assignment.

For the custom typeface in the website, I used [Epilogue](https://fonts.google.com/specimen/Epilogue) for the majority of the content, and [Aileron](https://www.dafontfree.io/aileron-font-family/) for the list items. Both fonts are stored locally.

For the content, most of the images that I used are taken from websites that I sourced.

For the news headline, I added some text-shadow as to make the text more readable.
![Text shadow headline](assets/readme/text-shadow.png)

The headline background image itself is responsive [^1], in which I used media query to alter the dimensions when the viewport is changed.

While most of the images were made responsive using media queries, I had one picture styled by using the picture + source + srcset method, replacing the original image with a smaller, cropped image in phone screens.
![Responsive Images](assets/readme/srcset.jpg)

The whole website layout is done in grids, with each grid being put in flexbox column sections. 

In terms of animation, I used the animation method during the fading in of text and images, while transitions are mostly done in hover events. I used Javascript to use the IntersectionObserver API so I can execute animations whenever the viewport scrolls in view of the animated element.

This website was designed with the maximum of accessibility. It thankfully receives an accesibility rating of 97 and SEO rating of 92 through Google Lighthouse as per the current checkpoint.

![Accesibility Rating](assets/readme/acessibility.png)




[^1]: The dimensions I picked for the responsive design is by using the 'iPhone 14 Pro Max' template, with dimensions of 430 x 932 pixels.
