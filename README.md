# Get space images from NASA

## The purpose of Technical test

- build React App with text input box and submit button
- build function to search space images from NASA api with ax ios
- render received images
- during build components, build jest files to test each components
- make spy test for axios method

## Screenshots of app

- desktop screen to show all images

- <img src="screen\screen-desktop.png" height="200">

- desktop screen clicking one image

- <img src="screen\screen-desktop-zoom.png" height="200">

- mobile screen to show images

- <img src="screen\screen-mobile.png" height="200">

## App built with (React)

- simple app to have a single text box input
- using the input to search and get images from NASA api
- showing all retrieved images to screen

## Testing utilities used (Jest, React Testing Library)

| Utilities      | From                     | Usage                                         |
| -------------- | ------------------------ | --------------------------------------------- |
| render, screen | "@testing-library/react" | to get screen by component                    |
| renderer       | "react-test-renderer"    | to generate snapshot for comparison next time |
| fireEvent      | "@testing-library/react" | to simulate event trigger on component        |
| waitFor        | "@testing-library/react" | await for a group of actions                  |
| axios          | "axios"                  | to apply spyOn test for axios api             |

## Package used

- Axios API: promise-based HTTP Client for node.js and the browser.
  [Link](https://axios-http.com/docs/intro)

## Instructions to run the app

- git clone https://github.com/DavidCheungTW/tech-test.git
- cd tech-test
- npm install
- npm start (use to test app)
- npm test (a: test all; q: quit test)

## Extra functions

- show description when mouse put on that image.
- clicking image can popup larger picture and title.
- add mobile screen handle.

## Author

David Cheung
