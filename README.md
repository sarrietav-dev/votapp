# votapp

## How to deploy on your machine

1. Clone this repo.
2. Install **Node.js**.
3. Run `npm install` on both backend and frontend folders. (Recommended: Install `nodemon`)
4. Ask me for the .env file, It's up to me if you're trust-worthy or not.
5. Run `nodemon backend/server.js` on backend and `npm start` on frontend.
6. Enjoy.

## Structure

### Backend
#### Packages used
- Express: To handle routing and general server operations.
- Mongoose: To handle communications with the database.
- Bcrypt: To encrypt passwords.
- JWT (JSONWebToken): To ensure security on API requests.
- Joi: To validate data from requests.
- CORS: ?
- Dotenv: To allow `.env` file.
- mongodb-memory-server: To mock a mongodb database for testing purposes.
- mocha/chai: Testing library for asserting.
- supertest: Testing library that helps with requests to the same server.
- mongo-sanitize: To avoid things like Query Injection.

#### Workspace structure
**server.js**  
Contains every configuration related to the server. All from express, database connection and cors. Also handles the routing middleware.  

**database/**  
Folder that contains every database mongo model and configuration, using Mongoose.  

**routes/**  
Folder that contains every API route that the frontend can access, using Express Router.  

**validation/**  
Folder that contains files that help with the validatiion of incoming request data using Joi and other packages.  

**tests/**
Folder that contains every test about api resquesting, using Mocha/Chai, supertest andd mongodb-memory-server.

#### API Routes
- `/api/login`: Handles login authentication for the app.
  - `/`: Only acepts POST requests. Requieres an username and password and validates the credentials.
- `/api/users`: Handles requests related to user data.
  - `/`:  
    POST: Takes an User's required data, encrypts the password and save it to the database.  
    GET: Returns all users.  
  - `/unverified`:  
    GET: Returns all unverified users.  
  - `/verify/:id`:  
    PATCH: Verifies the requested user with that id.  
  - `/deny/:id`:  
    DELETE: Denies access to that requested user and deletes it from the database.  
  - `/:id`:  
    GET: Returns the information about an user with that id.  
- `/api/elections`: Handles requests related to election data.  
  - `/`:  
    POST: Takes an Election's data, returns the election data.  
    GET: Returns all elections.  
  - `/:id`:  
    PATCH: Updates the information about the election.  
    DELETE: Deletes the election.  

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
