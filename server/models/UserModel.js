
const mongoose = require('mongoose')

let counter = 1
var ModelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      default: () => counter++
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Required']
    },
    pwd: {
      type: String,
      required: [true, 'Required']
    },
    nickname: {
      type: String,
      unique: true,
      required: [true, 'Required']
    },
    /*0保密，1男，2女*/
    sex: {
      type: Number,
      default: () => 1,
      required: [true, 'Required']
    },
    recipient: {
      type: String
    },
    address: {
      type: String
    },
    phone: {
      type: Number,
      required: [true, 'Required']
    },
  },
  {
    timestamps: {
      createdAt: 'createtime',
      updatedAt: 'updatetime'
    }
  }
)

// dietSchema.plugin(mongoosePaginate)
const UserModel = mongoose.model('User', ModelSchema)
UserModel.find({ id: { $gt: 0 } })
  .sort({ id: -1 })
  .then(([first, ...others]) => {
    if (first) counter = first.id + 1
  })
module.exports = UserModel
