const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema(
  {
    title : {
      type: String,
      required: [true, 'Please provide company name'],
      maxlength: 50,
    },
    content : {
      type: String,
      required: [true, 'Please provide position'],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    createdByName : {
      type:String,
      required: [true,'Please provide Owner Name']
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Job', JobSchema)
