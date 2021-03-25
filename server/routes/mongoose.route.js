const AnyNameController = require('../controllers/anyname.controller')

module.exports = app => {
    app.get("/exampleRoute", AnyNameController.findAll)
    app.post("/exampleCreate", AnyNameController.createNewEntry)
    app.get("/exampleFindSpecific/:specificid", AnyNameController.findSpecific)
    app.put("/exampleUpdateEntry/:specificid", AnyNameController.updateSpecific)
    app.delete("/exampleDeleteSpecific/:specificid", AnyNameController.deleteSpecific)
}



