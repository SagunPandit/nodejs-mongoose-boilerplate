import jwt from 'jsonwebtoken';
import { pick } from 'lodash';

export const createToken = (user, secret) => {
  const createToken = jwt.sign(
    {
      user: pick(user, ['id'])
    },
    secret,
    {
      expiresIn: '24h'
    }
  );

  return createToken;
};

export const createMobileToken = (user, secret) => {
  const createToken = jwt.sign(
    {
      user: pick(user, ['id'])
    },
    secret
  );

  return createToken;
};
