const { expressjwt: jwt } = require("express-jwt");
function express_jwt() {
  const secret = process.env.secret;
  return jwt({
    secret: secret,
    algorithms: ["HS256"],
  }).unless({
    path: [
    
      `/users/login`,
      `/users/postuser`,
        ],
  });
}

module.exports = express_jwt;

