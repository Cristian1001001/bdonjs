const {Router} = require('express')
const Restaurants=require('../models/Restaurants')
const router=Router()

// /api/restaurants
router.get(
    '/',
    async (req,res)=>{
        let restaurants
        try{
           restaurants = await Restaurants.find()
            res.json(restaurants)
        }catch (e) {
            res.status(500).json({message: 'Something went wrong'})
        }

    })

module.exports=router
