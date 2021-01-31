const jwt=require('jsonwebtoken')
const config=require('config')
const Products=require('../models/Products')
const bodyParser= require('body-parser')
const {Router} = require('express')
const Cart=require('../models/Cart')
const router=Router()

const jsonParser= bodyParser.json()
// api/cart
router.post(
    '/add',
    jsonParser,
    async (req,res)=> {
        try {
            const {productId, quantity, userId} = req.body
            const possibleItem = await Cart.findOne({productId, userId:  req.body.userId})
            if (possibleItem) {
               const item = await possibleItem.updateOne({$inc: {quantity: +quantity,"metrics.orders": 1 }})
                console.log(item)
                return res.status(201).json({message: 'cantitatea marita'})
            }
            const item = new Cart({productId, quantity, userId})
            await item.save()
            res.status(201).json({message: 'produs creat in cos'})

        }catch (e) {
            res.status(500).json({message: 'Something went wrong'})
        }

    }
)
//api/cart/getAll
router.get(
    '/getAll',
    jsonParser,
    async (req,res) =>{
        const token = req.headers.authorization.split(' ')[1]
        req.user = jwt.verify(token, config.get('jwtSecret'))
        // const userId =req.user[Object.keys(req.user)[0]];
        let productId;
        try {
            const items = await Cart.find({userId: req.user.userId})
            const itemProduct = items.map( async item=> {
                const product = await Products.find( {_id: item._doc.productId.id.toString('hex')})
                // await console.log( 'that is product',typeof product)
                // await console.log('items is',typeof item)
                // // console.log(item._doc.productId.id)
                // console.log('assigned', Object.assign( product,))
                // console.log('es6' ,{...product,...item._doc})
                return {...product[0]._doc, ...item._doc}
            })
            const allProducts = await Promise.all(itemProduct)
            res.json(allProducts)
        } catch (e) {
            res.status(500).json({message: 'Something went wrong'})
        }
    }
)
module.exports=router
