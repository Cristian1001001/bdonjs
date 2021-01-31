const {Schema, model, Types}= require('mongoose')

const schema= new Schema({
    productId:{type: Types.ObjectId, required: true, ref: 'Products'},
    quantity: {type: Number,required:true},
    userId:{type: Types.ObjectId, required:true, ref: 'User'},
})

module.exports = model('Cart',schema)
