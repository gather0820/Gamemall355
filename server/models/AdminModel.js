const mongoose = require('mongoose')
let counter = 1
var ModelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      default: () => counter++
    },
    account: {
      type: String,
      unique: true,
      required: [true, 'Required']
    },
    name: {
      type: String,
      required: [true, 'Required']
    },
    pwd: {
      type: String,
      required: [true, 'Required']
    }
  },
  {
    timestamps: {
      createdAt: 'createtime',
      updatedAt: 'updatetime'
    }
  }
)

const AdminModel = mongoose.model('Admin', ModelSchema)
AdminModel.find({ id: { $gt: 0 } })
  .sort({ id: -1 })
  .then(([first, ...others]) => {
    if (first) counter = first.id + 1
  })
module.exports = AdminModel
