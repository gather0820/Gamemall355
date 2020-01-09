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
    goodsDetailId: {
      type: Number,
      required: [true, 'Required']
    },
    goodsNum: {
      type: Number,
      required: [true, 'Required']
    },
    amount: {
      type: Number,
      required: [true, 'Required']
    },
    /*0未付款，1已付款未发货，2已发货未确认收到，3确认到货订单完成*/
    state: {
      type: Number,
      default: () => 0,
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

// dietSchema.plugin(mongoosePaginate)
const OrderModel = mongoose.model('Order', ModelSchema)
OrderModel.find({ id: { $gt: 0 } })
  .sort({ id: -1 })
  .then(([first, ...others]) => {
    if (first) counter = first.id + 1
  })
module.exports = OrderModel
