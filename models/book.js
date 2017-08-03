/*
We declare a schema with a number of string fields and a virtual for getting
the URL of specific book records and then export the model
*/

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

/*
We create two references to other models:
1. The author is a reference to a single Author model object, and is required
2. Genre is a reference to an array of Genre model objects.
*/
var BookSchema = Schema({
    title: {type: String, required: true},
    author: {type: Schema.ObjectId, ref: 'Author', required: true},
    summary: {type: String, required: true},
    isbn: {type: String, required: true},
    genre: [{type: Schema.ObjectId, ref: 'Genre'}]
});

//Virtual for book's URL
BookSchema
.virtual('url')
.get(function() {
    return '/catalog/book' + this._id;
});

//Export model
module.exports = mongoose.model('Book', BookSchema);