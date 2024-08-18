import jwt from 'jsonwebtoken';

const secretKey = 'P₹0Je(t_A'; // Replace with your secret key

export const generateToken = (payload) => {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '1h', // Token expiration time (e.g., 1 hour)
  });

  return token;
};
