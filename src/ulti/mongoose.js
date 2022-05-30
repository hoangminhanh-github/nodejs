module.exports={
    mutipleMongooseToObject:function(mongooses){
        return mongooses.map(mongoose =>mongoose.toObject())
    },
    MongooseToObjectfunction(mongoose){
        return mongoose ? mongoose.toObject() :mongoose
    },
}