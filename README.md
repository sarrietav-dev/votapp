# votapp

## How to deploy on your machine

1. Clone this repo.
2. Install **npm**.
3. Run `npm install` on both backend and frontend folders. (Recommended: Install `nodemon`)
4. Ask me for the .env file, It's up to me if you're trust-worthy or not.
5. Run `nodemon backend/server.js` on backend and `npm start` on frontend.
6. Enjoy.

## Structure

### Backend
#### Packages used
- Express: To handle routing and general server operations.
- Mongoose: To handle communications with the database.
- Bcrypt: TO encrypt passwords.
- JWT (JSONWebToken): To ensure security on API requests.
- Joi: To validate data from requests.
- CORS: ?
- Dotenv: To allow `.env` file.

#### Workspace structure
**server.js**  
Contains every configuration related to the server. All from express, database connection and cors. Also handles the routing middleware.  

**models/**  
Folder that contains every database mongo model squema, using Mongoose.  

**routes/**  
Folder that contains every API route that the frontend can access, using Express Router.  

**validation/**  
Folder that contains files that help with the validatiion of incoming request data using Joi and other packages.  

#### API Routes
- `/api/login`: Handles login authentication for the app.
  - `/`: Only acepts POST requests. Requieres an username and password and validates the credentials.
- `/api/users`: Handles requests related to user data.
  - `/`:  
    POST: Takes an User's required data, encrypts the password and save it to the database.  
    GET: Returns all users.
- `/api/elections`: Handles requests related to election data.
  - `/`:  
    POST: Takes an Election's data, returns the election data.
    GET: Returns all elections.

### Frontend
#### Packages used
- axios: To make request to the API.
- material-ui: To style components.
- prop-types: To ensure coding style.
- react/react-dom: Main framework.
- react-router/react-router-dom: To orginize component access and redirection.
- redux: To manage state between components.
- redux-thunk: To handle the state management logic (No styling related).
- uuid: To ensure random ids when mapping.

#### Workspace structure
- **src/App.js**: Main component.  
- **src/components/\***: Contains every `.jsx` file.  
- **src/store**: Contains everything related to Redux.  
  - **src/store/store.js**: Contains every configuration about the store, redux-devtools and middlewares.  
  - **src/store/actions**: Contains every action creator that can be dispatched.  
    - **src/store/actions/types.actions.js**: Contains every action constant used in reducers and action creators.  
    - **src/store/actions/thunks**: Contains the state management logic on thunks that are dispatched on components.  
  - **src/store/reducers**: Contains every Redux reducer.
  - **src/store/reducers/reducer.js**: Exports the combineReducers object.
