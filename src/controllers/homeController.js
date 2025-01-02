const connection = require("../config/database");
const getHompage = (reg, res) => {
  return res.render("home.ejs");
};

const getAbc = (reg, res) => {
  res.send("check ABC");
};

const getCuongdeptrai = (reg, res) => {
  res.render("sample.ejs");
};
const postCreateUser = (req, res) => {
  let { email, name, city } = req.body;

  console.log(">>> email = ", email, " name = ", name, " city = ", city);

  connection.query(
    `  INSERT INTO 
    Users (email, name, city) 
    VALUES (?, ?, ?) `,
    [email, name, city],
    function (err, results) {
      res.send("Them nguoi dung thanh cong");
    }
  );
};
module.exports = {
  getHompage,
  getAbc,
  getCuongdeptrai,
  postCreateUser,
};
