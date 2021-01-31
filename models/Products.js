const {Schema, model, Types}= require('mongoose')

const schema= new Schema({
    productName:{type: String, required: true},
    productPrice:{type: String, required:true},
    productImage:{type: String, required:true},
    restaurantId:{type: Types.ObjectId, required: true, ref:'Restaurants' }
})

module.exports = model('Products',schema)
