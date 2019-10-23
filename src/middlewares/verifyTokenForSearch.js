import jwt from 'jsonwebtoken';

const verifyTokenForSearch = (req, res, next) => {
  // Express headers are auto converted to lowercase
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        req.hasToken = false;
        next();
      } else {
        req.hasToken = true;
        req.decoded = decoded;
        next();
      }
    });
  } else {
    req.hasToken = false;
    next();
  }
};

export default verifyTokenForSearch;
