import mongoose from 'mongoose';

const flatSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true
  },
  block: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  residents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
});

export const Flat = mongoose.model('Flat', flatSchema);
