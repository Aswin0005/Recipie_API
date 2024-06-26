const Ingred = require('../model/Recipie')

const getRecipie = async (req, res) => {
    console.log(req.query)
    const {title} = req.query;
    const queryObject = {}

    if(title){
        queryObject.title = { $regex:title, $options: 'i'}
    }

    let result  = await Ingred.find(queryObject)

    res.status(200).json({result});
};

const getAllRecepie = async (req,res) => {
    const result = await Ingred.find({})
    res.status(200).json({result, count: result.length})
}

// const newRecipie = async (req,res) => {
// const recipie = await Ingred.create(req.body);
// res.status(200).json({msg: 'success'})
// }
module.exports = {getRecipie,getAllRecepie};
