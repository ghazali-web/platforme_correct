const mongoose = require("mongoose");
const FormCourse_schema = new mongoose.Schema({
  FormCourse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: { type: String },
  file: { type: String },
});
module.exports = mongoose.model("db_FormCourse", FormCourse_schema);
