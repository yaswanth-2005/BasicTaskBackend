const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const token = jwt.sign(
      { role: "admin", username },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
      })
      .json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

const logout = (req, res) => {
  res
    .clearCookie("token", { httpOnly: true, secure: true, sameSite: "Strict" })
    .status(200)
    .json({ message: "Logout successful" });
};

module.exports = { login, logout };
