const db = require("../configurations/database");

const repository = {}

repository.findAll = () => {
    return new Promise((resolve, reject) => {
        db.find({}, (err, cards) => {
                err ? reject(err) : resolve(cards);
        })
    });
};

repository.create = (card) => {
    return new Promise((resolve, reject) => {
        db.insert(card, (err, newCard) => {  
            err ? reject(err) : resolve(newCard);
        });
    });
};

repository.findById = (id) => {
    return new Promise((resolve, reject) => {
        db.findOne({ _id: id },  (err, card)  => {  
            err ? reject(err) : resolve(card);
        });
    });
};

repository.updateById = (id, card) => {
    return new Promise((resolve, reject) => {
        db.update({ _id: id }, { ...card } , { },  (err, card)  => {  
            err ? reject(err) : resolve(card);
        });
    });
};

repository.deleteById = (id) => {
    return new Promise((resolve, reject) => {
        db.remove({ _id: id }, { },  (err, numRemoved)  => {  
            err ? reject(err) : resolve(numRemoved);
        });
    });
};



module.exports = repository;