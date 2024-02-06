const searchFilms = require('../utility/searchLogic');

const express = require('express');
const router = express.Router();

router.get('/film-search', (req, res, next) => {
    const params = new URLSearchParams(req.url.slice(13));
    const searchResults = searchFilms(
        params.get('title'), params.get('director'), params.get('year')
        );
    if (!searchResults.length) {
        return res.status(404).json({message: 'Not found!'});
    }
    res.json({searchResults: searchResults});
})

module.exports = router;