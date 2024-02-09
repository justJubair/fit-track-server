const Services = require("../../models/Services")


// get a single service via id
const getSingleService = async(req,res)=>{
    const id = req?.params?.id

    try{
        const result = await Services.findById(id).exec()
        res.send(result);
    }
    catch(error){
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
}

module.exports = getSingleService