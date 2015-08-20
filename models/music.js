

var mongoose = require('mongoose');

module.exports = mongoose.model('Album', {

    _id:{ type: String, required: true, index: { unique: true } },
    apple_id: String,
    mbrain_id: String,
    title: String,
    yead: String,
    images: {},
    slug: String,
    synopsis: String,
    rating: {},
    genres: {type:[], default: "music"},
    country: String,
    songs: [],
    last_update: Number

});