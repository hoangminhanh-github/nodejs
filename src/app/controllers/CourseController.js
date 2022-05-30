const Courses = require('../models/Course')
const { mutipleMongooseToObject, MongooseToObjectfunction } = require('../../ulti/mongoose')
class CoursesController {

    // [get]/search
    show(req, res) {
        res.send("courses details")
    }
}


module.exports = new CoursesController