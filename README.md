# Google-Books-Vue
A web app built with the Google Books API and Vue.js

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run serve
```

## Things to know
- This project was built 6 years ago and is not maintained 😂
- It was built to demonstrate simple understanding of REST API's, building vue components, and passing props
- If I were to make updates, I would add a global state management and use a different HTTP client like Axios

## Structure
All components are nested in the App.vue which handles emitted events, state updates, and passes props to other child components. As mentioned above, rather than passing props, the better approach would be to implement a global store / state management.

## Technologies
- Vue
- Materialize CSS Framework
- JavaScript
- Netlify