#!/bin/bash

(gnome-terminal --working-directory=$HOME/votapp/backend -- nodemon server.js) &
(gnome-terminal --working-directory=$HOME/votapp/frontend -- npm start) &
