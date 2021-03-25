const AnyName = require('../models/examplemodel.model')

// Get All Data Inside The AnyName DB
module.exports.findAll = (req,res) => {
    AnyName.find()
        .then(allThings => {
            console.log("Retreiving data from Database .............................")
            res.json({result: allThings})
        })
        .catch(err => res.json(err))
}

// CREATE a new entry for the database
module.exports.createNewEntry = (req, res) => {
    AnyName.create(req.body)
        .then(newEntry => res.json({justCreated: newEntry}))
        .catch(err => res.json(err))
}

// FIND a specfic entry that exists in the databse
module.exports.findSpecific = (req, res) => {
    AnyName.findOne({_id: req.params.specificid})
        .then(specificEntry => res.json({specficEntry: specificEntry}))
        .catch(err => res.json(err))
}

// UPDATE a specific entry that exists in the database by ID
module.exports.updateSpecific = (req, res) => {
    AnyName.findOneAndUpdate(
        {_id: req.params.specificid}, 
        req.body , 
        {new:true,
        runValidators:true})
        .then(specificUpdate => res.json({updatedSpecific: specificUpdate}))
        .catch(err => res.json(err))
}

// DELETE s specific entry that exists by ID
module.exports.deleteSpecific = (req, res) => {
    AnyName.findOneAndDelete({_id: req.params.specificid},{useFindAndModify:false})
        .then(deletedResult => res.json({deleted: deletedResult}) )
        .catch(err => res.json(err))
}
