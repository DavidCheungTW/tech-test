# Technical Test App

## Project Brief

This application uses to search images for stars, planets or galaxy entered by a user. Then application need to fetch images from NASA external API.

When image is found, application needs to show images. And user can click image which one like, an enlarged image will be shown.

If no image is found, error message will be shown.

Besides, application needs to have a full test suite for each components including asynchronous components.

## Screenshots of app

- desktop screen to show all images

  <img src="screen\screen-desktop.jpeg" height="200">

- desktop screen clicking one image

  <img src="screen\screen-desktop-zoom.jpeg" height="200">

- mobile screen to show images

  <img src="screen\screen-mobile.jpeg" height="200">

## Testing utilities used (Jest, React Testing Library)

| Utilities | From                     | Usage                                                          |
| --------- | ------------------------ | -------------------------------------------------------------- |
| renderer  | "react-test-renderer"    | to generate component snapshots to catch unanticipated changes |
| render    | "@testing-library/react" | to create the virtual test environment                         |
| fireEvent | "@testing-library/react" | to simulate event trigger on component                         |
| waitFor   | "@testing-library/react" | await for a group of actions                                   |
| spyOn     | "jest"                   | to mock response from axios API calls                          |

## Technologies

- [React](https://react.dev/learn): create a React app project template
- [Axios API](https://axios-http.com/docs/intro): promise-based HTTP Client for node.js and the browser
- [Prop types](https://www.npmjs.com/package/prop-types): runtime type checking for React props and similar objects

## Instructions

- Clone the repo:

```
git clone https://github.com/DavidCheungTW/tech-test.git
```

- Move into the directory and install:

```
cd tech-test
npm install
```

- To start and run on port 3000:

```
npm start
```

- To run the tests:

```
npm test
```

## Extra features

- show description when mouse put on that image
- clicking image can popup larger picture with title
- add mobile screen handle

## Author

[David Cheung](https://www.linkedin.com/in/david-cheung-473597199/)
