const User = require("../models/user");

exports.changeUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    await User.update({ role }, { where: { id: req.params.id } });
    const updatedUser = await User.findByPk(req.params.id);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to change user role" });
  }
};
