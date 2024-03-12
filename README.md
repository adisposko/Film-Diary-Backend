Film Diary Backend

Practice project. Server-side ExpressJS app with MongoDB database. Associated browser-side React app "Film Diary" at https://github.com/adisposko/Film-Diary

Functionality: Browser-side implements a diary of watched films. Server-side receives
query to search films from limited database of 50 films, and returns an array of
films that correspond to the search parameters (title, director, and/or year of release).
Film database stored on MongoDB cloud.

Default local port is 8000, can be changed in app.js file (must be changed on browser-side as well).

Initialize with terminal commands:

npm install

node app.js