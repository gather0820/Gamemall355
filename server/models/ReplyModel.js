const mongoose = require('mongoose')

let counter = 1
var ModelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      default: () => counter++
    },
    messageId: {
      type: Number,
      required: [true, 'Required']
    },
    content: {
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

const ReplyModel = mongoose.model('Reply', ModelSchema)
ReplyModel.find({ id: { $gt: 0 } })
  .sort({ id: -1 })
  .then(([first, ...others]) => {
    if (first) counter = first.id + 1
  })
module.exports = ReplyModel
