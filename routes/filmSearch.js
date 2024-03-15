const express = require('express');
const router = express.Router();

//code below exposes access to MongoDB cloud database, which is accessible from any IP
//this was done to enable anyone surveying my github to initialize the backend app
//however, the user/pass combo in the client url below grants read only privileges to user...
//...and the database contains no confidential information
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://film_search_readonly:QYjUJGDA5nz688U6@filmdiary.lch3av0.mongodb.net/?retryWrites=true&w=majority&appName=filmdiary';
const client = new MongoClient(url);
const db = client.db('film_diary');
const filmData = db.collection('film_data')

router.get('/film-search', (req, res, next) => {
    const params = new URLSearchParams(req.url.slice(13));
    const query = {
        title: {$regex: '.*' + params.get('title') + '.*', $options: 'i'},
        director: {$regex: '.*' + params.get('director') + '.*', $options: 'i'}, 
    }
    const year = +params.get('year');
    if (!!year) query.year = year;
    
    filmData.find(query).toArray()
    .then((searchResults) => {
        if (!searchResults.length) {
            return res.status(404).json({message: 'Not found!'});
        }
        res.json({searchResults: searchResults});
    });
})

module.exports = router;