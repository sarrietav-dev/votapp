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

#### Workspace Structure
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
