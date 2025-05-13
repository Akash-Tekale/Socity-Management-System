import mongoose from "mongoose";

const maintenanceSchema = new mongoose.Schema({
  flat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flat',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  dueDate: Date,
  paid: {
    type: Boolean,
    default: false
  },
  paidOn: Date,
  remarks: String
});

export const Maintenance = mongoose.model('Maintenance', maintenanceSchema);
