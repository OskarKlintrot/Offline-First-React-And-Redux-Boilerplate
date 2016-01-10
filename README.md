# Offline First React And Redux Boilerplate
This is a boilerplate in order to quickly get going with new projects in React and Redux.

## What's Included

 - [React](http://facebook.github.io/react/)
 - [React-Router](https://www.npmjs.com/package/react-router)
 - [Redux](http://redux.js.org/)
 - [Redux Thunk](https://www.npmjs.com/package/redux-thunk)
 - [Redux DevTools](https://www.npmjs.com/package/redux-devtools)
 - [UpUp](https://www.talater.com/upup/)
 - [Webpack](http://webpack.github.io/)
 - [ESLint config file](http://eslint.org/)

## Offline First
UpUp is a wrapper for Service Workers which is making it possible to run this boilerplate offline. You can manage the Service Workers in Chrome here: [chrome://serviceworker-internals](chrome://serviceworker-internals). Service Workers are currently supported in [these browsers](http://caniuse.com/#search=service%20workers).

## Production vs Development
UpUp is not included in the development build but Redux Devtools is. Vice versa when building for production.

## Directory Tree
Note that all source code is located under `src/`.
```
+---app
|   +---components
|   |   +---root
|   |   \---shared
|   +---redux
|   |   +---actions
|   |   \---store
|   |       \---reducers
|   \---scripts
|       \---upup
\---www
    \---css
```

## Installation
After downloading the repository as a zip-file and unpacking it, install the dependencies:
```
cd <repo folder>
npm install
```

Now you can run your local server with live preview:
```
npm start
```
Server is located at http://localhost:3000

To build a static version of the project run:
```
npm run build
```
When building the project the default location for the build is in the root. The reason for this is to make it possible to using GH-pages both for hosting and development. For larger projects it's highly recommended to use different branches for hosting and for development!
