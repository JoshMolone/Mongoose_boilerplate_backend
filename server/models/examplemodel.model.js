const mongoose = require("mongoose");


const ExampleSchema = new mongoose.Schema({
    field1: {
        type: String,
        required: [true, "You have to supply this field"],
            // Backend Validations for max/min length 
        minLength: [3, "This field must be 3 or more characters"],
        maxLength: [10, "This field must be 6 or less characters"]
    },
    description: {
        type: String, 
        required: [true, "You have to provide a description"]
    }
})

const AnyName = mongoose.model("AnyName", ExampleSchema )
module.exports = AnyName; 