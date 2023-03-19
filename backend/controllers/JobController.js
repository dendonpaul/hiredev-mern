const JobModel = require("../models/JobModel");

const register = async (req, res) => {
  const saveJob = new JobModel(req.body);
  await saveJob.save().then((data) => res.status(200).json(data));
};

module.exports = { register };