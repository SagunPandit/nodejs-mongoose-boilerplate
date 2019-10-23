import jwt from 'jsonwebtoken';
import Boom from '@hapi/boom';

const verifyToken = (req, res, next) => {
  // Express headers are auto converted to lowercase
  let token = req.headers['x-access-token'] || req.headers['authorization'];

  if (token) {
    if (token.startsWith('Bearer ')) {
      // Remove Bearer from string
      token = token.slice(7, token.length);
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        throw Boom.unauthorized('Invalid token');
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    throw Boom.unauthorized('Auth token is required.');
  }
};

export default verifyToken;
