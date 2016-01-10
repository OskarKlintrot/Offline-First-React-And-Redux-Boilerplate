# React, React-Router, Redux, Redux Devtools, UpUp and Webpack Boilerplate
This is a boilerplate in order to quickly get going with new projects in React and Redux.

## Offline First
UpUp is a wrapper for Service Workers which is making it possible to run this boilerplate offline. You can manage the Service Workers in Chrome here: [chrome://serviceworker-internals](chrome://serviceworker-internals). Service Workers are currently supported in [these browsers](caniuse.com/#search=service%20workers).

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
After cloning the repository, install dependencies:
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
