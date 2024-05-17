const mongoose = require('mongoose');

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId, 
      required: true, 
      reference: 'User'
    }, 
    name: {
      type: String,
      required: [true, 'Please add the contact name! 🙏'],
    },
    email: {
      type: String,
      required: [true, 'Please add the contact email address! 🙏'],
    },
    phone: {
      type: Number,
      required: [true, 'Please add the contact phone number! 🙏'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contact', contactSchema);
