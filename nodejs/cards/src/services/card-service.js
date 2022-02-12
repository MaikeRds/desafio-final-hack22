// const models = require("../models/users-models");
const Card = require("../models/card-model");
const cardRepository = require("../repositories/card-repository");
const service = {}

service.findAll = async () => {
    return await cardRepository.findAll();
}

service.create = async (card) => {
    const createCard =  new Card();
    createCard.setCardNumber(card.cardNumber);
    createCard.setEmbossName(card.embossName);
    createCard.setCustomerName(card.customerName);
    createCard.setDocumentNumber(card.documentNumber);
    createCard.setMotherName(card.motherName);
    createCard.setAddress(card.address);
    createCard.setCity(card.city);

    return await cardRepository.create(createCard);
}

service.findById = async (id) => {
    return await cardRepository.findById(id);   
}

service.updateById = async (id, card) => {
    return await cardRepository.updateById(id, card);   
}

module.exports = service;