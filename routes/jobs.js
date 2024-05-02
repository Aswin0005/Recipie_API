const express = require('express')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
} = require('../controller/jobs')

router.route('/').post(createJob).get(getAllJobs)

router.route('/:id').delete(deleteJob).patch(updateJob)

module.exports = router
