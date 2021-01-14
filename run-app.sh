cd ./backend
(nodemon $HOME/votapp/backend/server.js > /dev/null 2>&1) & 
cd ../frontend
(npm start > /dev/null 2>&1) &
