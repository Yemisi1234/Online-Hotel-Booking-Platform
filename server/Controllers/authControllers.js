var myUser = require("../models/userModel.js");
var jwt = require("jsonwebtoken");

async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be minimum of 6 characters long");

  let userExists = await myUser.findOne({ email }).exec();

  if (userExists) return res.status(400).send("Email exists");

  //register TO DATABASE
  let user = myUser(req.body);
  try {
    await user.save();
    console.log("User has been created", user);
    res.status(200).json({ ok: true });
  } catch (err) {
    console.log("User not created", err);
    res.status(400).send("Error,Try again");
  }
}

//login
async function login(req, res) {
  const { email, password } = req.body;
  if (!email) return res.status(400).send("Email is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and should be minimum of 6 characters long");

  try {
    let userExists = await myUser.findOne({ email }).exec();

    if (!userExists) return res.status(400).send("User doesnt exist");

    userExists.compare(password, (err, match) => {
      if (err || !match) return res.status(400).send("Wrong Password");
      // GENERATE jwt tokens
      let token = jwt.sign({ _id: userExists._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).json({
        token,
        user: {
          Id: userExists._id,
          name: userExists.name,
          email: userExists.email,
          createdAt: userExists.createdAt,
          updatedAt: userExists.updatedAt,
        },
      });
    });
  } catch (err) {
    console.log("Login Error", err);
    res.status(500).send("Error in Login");
  }
}

module.exports = { register, login };
