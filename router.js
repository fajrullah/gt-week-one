const { getRestaurantData, createRestaurant } = require('./controllers/restaurants')

module.exports = (app) => {

    app.route('/restaurants')
        .get(getRestaurantData)
        .post(createRestaurant)
}