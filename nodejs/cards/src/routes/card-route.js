
const controller = require("../controllers/card-controller");

module.exports = (app) => {

    app.route('/cards')
        .get(controller.findAll);

    app.route('/cards')
        .post(controller.create);

    app.route('/cards/:id')
        .put(controller.updateById);
    
    app.route('/cards/:id')
        .delete(() => {});

    app.route('/cards/:id')
        .get(() => {});
    
    app.route('/cards/paginationAndSorting')
        .get(() => {});

}