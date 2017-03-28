# Concentration

  Memory game.  Flip the boxes and try to match like pictures.
  https://warm-dawn-43837.herokuapp.com/
  Must have latest updates for Chrome or Firefox browser installed.

##  Tech Used

  * React
  * create-react-app
  * Classnames
  * CSS - transforms, Grid



## Approach

  Created an array of randomized objects to attach to the individual rectangle components and then mapped them to a parent container.  All state is managed in the parent container, where I can read the rectangles object with the onClick event listener and turn the transforms on and off with the help of classnames and the re-render of parent container.  Classnames allow me to created an object of multiple classnames and give them a boolean value, which I pass down via props on the re-render, adding and removing the class.

  For the pieces, I used a wrapper div to give the rectangles some perspective, then housed all of the individuals sides in a container div inside the wrapper, which were absolutely positioned and transformed to meet the 3d requirements.  I tilted the rectangle in its sitting position so you can see the 3d perspective of the element, otherwise you can only see it when it spins.

  CSS Grid really has a basic use in this app.  Simply a column layout with column and row gaps.

## Why?

  This is a redo of my first ever web development project.  I have been wanting to redo if for awhile, but needed some new tech as a challenge and of course time.  Found both.

## What I learned

  A lot about react's state and props, how and when the re-render happens.  I thought the concept was easy enough to grasp, but implementation took me a minute to get down.  

  CSS Transforms!  Spent the same amount of time walking through the flow of the react components as I did with the rectangles, which started out as cubes, but I thought it looked better this way.  Worked through a couple implementations, which was a bit of a rabbit hole because they all did more or else the same thing, but it was good practice.  Happy with the result.

## Next steps

  * Flesh out UI.  Can always look better, move forward.  
  * Need to add a winner function.
  * New timer component that I implement in react.  
  * Making pieces spin in different directions per click.
  * Make responsive.
  * New Linux svg
