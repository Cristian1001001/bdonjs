const {Router} = require('express')
const Products=require('../models/Products')
const router=Router()

// /api/products/:rid
router.get(
    '/:rid',
    async (req,res)=>{
        let products
        try{
            products = await Products.find({restaurantId: req.params.rid})
            res.json(products)

        }catch (e) {
            res.status(500).json({message: 'Something went wrong'})
        }
    })
router.get(
    '',
    async (req,res)=>{
        let products
        if(req.query.search){
            try{
                products = await Products.find({'productName': {'$regex': req.query.search, $options: 'i'} })
                // products = await Products.find({productName: new RegExp('^'+req.query.search)})
                res.json(products)
            }catch (e) {
                res.status(500).json({message: 'Something went wrong'})
            }
        }else {
            try {
                products = await Products.find()
                res.json(products)
            } catch (e) {
                res.status(500).json({message: 'Something went wrong'})
            }
        }
    })
// router.get(
//     '/search/:name',
//     async (req,res)=>{
//         let products
//         try{
//             products = await Products.find({productName: {$regex: req.params.name}})
//             res.json(products)
//         }catch (e) {
//             res.status(500).json({message: 'Something went wrong'})
//         }
//     })
module.exports=router
