const mongoose = require('mongoose')
let counter = 1
var ModelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      default: () => counter++
    },
    userId: {
      type: Number,
      required: [true, 'Required']
    },
    goodsId: {
      type: Number,
      required: [true, 'Required']
    },
    goodsDetailId: {
      type: Number,
      required: [true, 'Required']
    },
    orderId: {
      type: Number,
      required: [true, 'Required']
    },
    content: {
      type: String
    },
    score: {
      type: Number,
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

const CommentModel = mongoose.model('Comment', ModelSchema)
CommentModel.find({ id: { $gt: 0 } })
  .sort({ id: -1 })
  .then(([first, ...others]) => {
    if (first) counter = first.id + 1
  })
module.exports = CommentModel
