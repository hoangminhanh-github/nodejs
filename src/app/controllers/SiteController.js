const Courses = require('../models/Course')
const { mutipleMongooseToObject, MongooseToObjectfunction } = require('../../ulti/mongoose')
class SiteController {
    //[GET] /
    index(req, res, next) {
        Courses.find({})

        .then(courses => {
           res.render('home',{
               courses:mutipleMongooseToObject(courses)
           })
        })
        .catch(next)
    }
    // [get]/search
    search(req, res) {
        res.render("search")
    }
}


module.exports = new SiteController