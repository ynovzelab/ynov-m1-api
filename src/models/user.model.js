const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength:50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 2,
    maxLength:50
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required:true
  },
  isAdmin: {
    type: Boolean,
    default:false
  },
  type: [
    {
      type: String,
      enum: ["CUSTOMER, OWNER"],
      default:"CUSTOMER"
    }
  ],
  places: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Place"
    }
  ]
})

module.exports=mongoose.model('User', userSchema)