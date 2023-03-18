const DevModel = require("../models/DevModel");

const register = async (req, res) => {
  console.log(req.body);
  const saveDev = new DevModel(req.body);
  const unameExists = await DevModel.findOne({ email: saveDev.email });

  if (unameExists) {
    return res
      .status(201)
      .json({ message: "Email Already registered. Try with a new one" });
  }
  saveDev.save().then((data) => res.send(data));
};

module.exports = { register };
