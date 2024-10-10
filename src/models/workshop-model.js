import { Schema, model } from "mongoose";

//const specialitesSchema = new Schema ({specialites: String})

const workshopSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true
  },
  specialites: {
    type: [String],
    required: true
  },
    maintenances: {
      type: Schema.Types.ObjectId,
      ref: "Maintenance",
    }
});

const Workshop = model("Workshop", workshopSchema);

export default Workshop;