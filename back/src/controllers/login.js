const users = require("../utils/users");

module.exports = (req, res) => {
//   console.log(req.query);
  const { email, password } = req.query;

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) return res.status(200).json({ access: true });
  return res
    .status(401)
    .json({ access: false, message: "Usuario o contraseña incorrecta" });

//   user? res.status(200).json({ access: true })
//     : res.status(401).json({ access: false, message: "Usuario o contraseña incorrecta" });
};
