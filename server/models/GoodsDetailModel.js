const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate');//分页插件
let counter = 1
var ModelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      default: () => counter++
    },
    goodsId: {
      type: Number,
      required: [true, 'Required']
    },
    specName: {
      type: String,
      required: [true, 'Required']
    },
    stockNum: {
      type: Number,
      default: () => 0,
      required: [true, 'Required']
    },
    unitPrice: {
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

// dietSchema.plugin(mongoosePaginate)
const GoodsDetailModel = mongoose.model('GoodsDetail', ModelSchema)
GoodsDetailModel.find({ id: { $gt: 0 } })
  .sort({ id: -1 })
  .then(([first, ...others]) => {
    if (first) counter = first.id + 1
  })
module.exports = GoodsDetailModel
