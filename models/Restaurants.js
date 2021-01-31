const {Schema, model}= require('mongoose')

const schema= new Schema({
    restName:{type: String, required: true, unique:true},
    restImage:{type: String, required: true},
    deiveryPrice:{type: String, required:true}
})

module.exports = model('Restaurants',schema)
