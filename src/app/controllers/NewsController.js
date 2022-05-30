const res = require("express/lib/response")

class NewsController {
  
    // [get]/new/:slug
    show(req,res){
        res.send("new details")
    }
}


module.exports=new NewsController