const service = require("../services/card-service");
const controller = {};

controller.findAll = async (req, res) => {
  const cards = await service.findAll();
  return res.status(200).json(cards);
};

controller.create = async (req, res) => {
    const card = await service.create(req.body); 
    return res.status(200).json(card);
};

controller.updateById = async (req, res) => {
    const id = req.params.id
    const cardUpdate = req.body
    const card = await service.findById(req.params.id);

    if(!card){
        return res.status(404).json({message: 'Card not Found'});
    }

    await service.updateById(id, cardUpdate); 
    
    return res.status(200).json({message: "Card atualizado!"});
};

controller.deleteById = async (req, res) => {
    const id = req.params.id
    const card = await service.findById(req.params.id);

    if(!card){
        return res.status(404).json({message: 'Card not found!'});
    }

    await service.deleteById(id); 
    
    return res.status(200).json({message: "Card deletado!"});
};

controller.findById = async (req, res) => {
    const id = req.params.id
    const card = await service.findById(id);

    if(!card){
        return res.status(404).json({message: 'Card not found!'});
    }
    
    return res.status(200).json(card);
};

module.exports = controller;