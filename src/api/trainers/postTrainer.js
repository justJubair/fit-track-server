const Trainers = require("../../models/Trainers");

const postTrainer = async(req,res)=>{
    try{
        const trainer = req?.body;
        const result = await Trainers.create(trainer);
        res.send(result)

    }
    catch(error){
        console.error(error)
    }
}

module.exports=postTrainer