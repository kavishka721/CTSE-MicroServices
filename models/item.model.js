const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    itemId: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
//utilityBillSchema.index({ year: 1, month: 1 }, { unique: true })

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;

