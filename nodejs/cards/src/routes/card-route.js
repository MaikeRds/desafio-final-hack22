
const controller = require("../controllers/card-controller");

module.exports = (app) => {

    app.route('/cards')
        .get(controller.findAll);

    app.route('/cards')
        .post(controller.create);

    app.route('/cards/:id')
        .put(controller.updateById);
    
    app.route('/cards/:id')
        .delete(controller.deleteById);

    app.route('/cards/:id')
        .get(controller.findById);
    
    app.route('/cards/paginationAndSorting')
        .get(() => {});

}