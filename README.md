# votapp

## How to deploy on your machine

1. Clone this repo.
2. Install **Node.js**.
3. Run `npm install`.
4. Ask me for the .env file, It's up to me if you're trust-worthy or not.
5. Run `npm start`.
6. Enjoy.

## Structure

### Frontend

#### Packages used

- axios: To make request to the API.
- material-ui: To style components.
- prop-types: To ensure coding style.
- react/react-dom: Main framework.
- react-router/react-router-dom: To orginize component access and redirection.
- redux-toolkit: To manage state between components.
- shortid: To ensure random ids when mapping.
- react-hook-form: To have better performance when dealing with forms.

#### Workspace structure

- **src/App.js**: Main component.
- **src/components/\***: Contains every `.jsx` file.
- **src/store**: Contains everything related to Redux.
  - **src/store/store.js**: Contains every configuration about the store, redux-devtools and middlewares.
  - **src/store/thunks**: Contains the state management logic on thunks that are dispatched on components.
  - **src/store/reducers**: Contains every Redux Slice.
    - **src/store/reducers/reducer.js**: Exports the combineReducers object.

**Note:** In projects there's the roadmap oh this app
