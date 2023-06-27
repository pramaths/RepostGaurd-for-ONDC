const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      //required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    productType: {
      type: String,
     // required: true,
      enum: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books'],
    },
    status: {
      type: String,
      enum: ['refund', 'accepted'],
      default: 'refund',
    },
    reason: {
      type: String,
     // required: true,
    },
    platform: {
      type: String,
     // required: true,
    },
    returnHistory: [
      {
        type: {
          type: String,
          enum: ['Electronics', 'Clothing', 'Home & Kitchen', 'Books'],
        },
        count: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
