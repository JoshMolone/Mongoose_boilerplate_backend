
// HERE IS WHERE YOU NEED TO ADD CONST MONGOOSE
const mongoose = require('mongoose'); 

// Here is where you are connecting to the database
mongoose.connect('mongodb://localhost/mongoose_DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
        .then(() => console.log('You are connected to the database.....................'))
        .catch(() => console.log('ERROR: connecting to database................', err));