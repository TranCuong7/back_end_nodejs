const getHompage = (reg, res) => {
  return res.render("home.ejs");
};

const getAbc = (reg, res) => {
  res.send("check ABC");
};

const getCuongdeptrai = (reg, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHompage,
  getAbc,
  getCuongdeptrai,
};
