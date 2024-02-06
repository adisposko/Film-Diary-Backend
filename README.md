Film Diary Backend

Server-side ExpressJS app. Browser-side React app "Film Diary" at https://github.com/adisposko/Film-Diary

Functionality: Browser-side implements a diary of watched films. Server-side receives
query to search films from limited database of 100 films, and returns an array of
films that correspond to the search parameters (title, director, and/or year of release).

Default local port is 8000, can be changed in app.js file (must be changed on browser-side as well).

Initialize with terminal commands:

npm install

node app.js