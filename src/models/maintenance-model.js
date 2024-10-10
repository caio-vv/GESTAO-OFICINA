import { Schema, model } from "mongoose";

const servicesSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }
})

const maintenanceSchema = new Schema({
    workshop: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  services: {
    type: [servicesSchema],
    required: true
  },
    totalcost: {
      type: Number,
      required: false
    },
    date:{
        type: Date,
        required: true
    }
});


const Maintenance = model("Maintenance", maintenanceSchema);

export default Maintenance;