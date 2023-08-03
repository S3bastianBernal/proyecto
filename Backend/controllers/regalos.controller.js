const Regalo = require('../models/Regalos.js');

const getRegalos = async (req,res) =>{
    const regalos = await Regalo.find();
    res.json({
        regalos
    })
}

const postRegalos = async (req,res) =>{
    const regalo = new Regalo(req.body);
    try {
        const nuevoRegalo = await regalo.save();
        res.json(nuevoRegalo)
    } catch (error) {
        console.log(error);
    }
};

const deleteRegalo = async (req,res) =>{
    
}