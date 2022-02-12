module.exports = class Card {
    //propriedades e funções da classe aqui
    constructor(cardNumber = 0, embossName = '', customerName = '', documentNumber = 0, motherName = '', address = '', city = '') {
        this.cardNumber = cardNumber;
        this.embossName = embossName;
        this.customerName = customerName;
        this.documentNumber = documentNumber;
        this.motherName = motherName;
        this.address = address;
        this.city = city;
    }

    getId(){
        return this._id;
    }

    setId(id){
        return this._id = id;
    }

    getCardNumber(){
        return this.cardNumber;
    }

    setCardNumber(cardNumber){
        return this.cardNumber = cardNumber;
    }

    getEmbossName(){
        return this.embossName;
    }

    setEmbossName(embossName){
        return this.embossName = embossName;
    }

    getCustomerName(){
        return this.customerName;
    }

    setCustomerName(customerName){
        return this.customerName = customerName;
    }

    getDocumentNumber(){
        return this.documentNumber;
    }

    setDocumentNumber(documentNumber){
        return this.documentNumber = documentNumber;
    }

    getMotherName(){
        return this.motherName;
    }

    setMotherName(motherName){
        return this.motherName = motherName;
    }

    getAddress(){
        return this.address;
    }

    setAddress(address){
        return this.address = address;
    }

    getCity(){
        return this.city;
    }

    setCity(city){
        return this.city = city;
    }
}