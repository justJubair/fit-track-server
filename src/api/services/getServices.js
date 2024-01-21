const Services = require("../../models/Services")
const getServices = async(req,res)=>{
    const result = await Services.find();
    res.send(result);
}

module.exports=getServices