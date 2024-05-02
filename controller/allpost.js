
const {StatusCodes} = require('http-status-codes')
const Job = require('../model/Job')

const getJob = async (req, res) => {


  const job = await Job.find({});
  if (!job) {
    throw new NotFoundError(`No job with id ${jobId}`);
  }


  res.status(StatusCodes.OK).json({ job });
};

module.exports = getJob;