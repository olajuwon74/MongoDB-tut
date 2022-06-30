const mongoose = require ('mopngoose')

async function connect(uri){
    mongoose.connect(uri || 'mongodb://localhost')
}