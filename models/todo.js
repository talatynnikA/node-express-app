const {Schema, model} = require('mongoose')

const schema = new Schema({
    title: {
        type: String,
        requires: true
    },
    completed: {
      type: Boolean,
      default: false
    }
})

module.exports = model('Todo', schema)