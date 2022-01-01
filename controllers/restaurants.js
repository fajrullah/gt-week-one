const restaurants = require('../system/database/schemas/Restaurants')
module.exports = {
    getRestaurantData: async (req, res) => {
    try {

        const obj = await restaurants.find().populate('menus')

        return res.json(obj)

    } catch(error) {  

        console.log(error)

        return res.status(400).json({
            msg: 'Something wrong'
        })
    }

  },

  createRestaurant: async (req, res) => {
    try {

        const { ...rest } = req.body

        console.log(rest)

        const obj = await restaurants.create(rest)

        return res.status(201).json(obj)

    } catch(error) {  

        console.log(error)

        return res.status(400).json({
            msg: 'Something wrong'
        })
    }

  }
}