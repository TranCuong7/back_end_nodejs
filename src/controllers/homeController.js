const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../service/CRUDService");

const getHompage = async (reg, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getAbc = (reg, res) => {
  res.send("check ABC");
};

const getCuongdeptrai = (reg, res) => {
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let { email, name, city } = req.body;

  let [results, fields] = await connection.query(
    "INSERT INTO Users (email, name, city) VALUES (?,?,?)",
    [email, name, city]
  );
  res.send("ok roi ban");
};

const getCreatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user });
};

const postUpdatePage = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  await updateUserById(email, name, city, userId);

  res.redirect("/");
};

module.exports = {
  getHompage,
  getAbc,
  getCuongdeptrai,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
  postUpdatePage,
};
