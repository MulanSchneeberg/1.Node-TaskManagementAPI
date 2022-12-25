const not_found = (req, res) => {
  return res
    .status(404)
    .json({ msg: "the requested rsource can not be found" });
};
module.exports = not_found;
