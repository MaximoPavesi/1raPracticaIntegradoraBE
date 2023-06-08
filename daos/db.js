const { Router } = require("express")
const mongoose = require("mongoose")

class ManagerMongo {

    constructor(url) {
        this.url = "mongodb+srv://machipavesi:machi777@clustercodermongo.6u072tr.mongodb.net/ecommerce"
    }

    connectMongoDb = ()=> {
        return mongoose.connect(this.url,{})
    }

}

module.exports = ManagerMongo