const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    // Verify the token and attach user data to req.user
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach user info to the request
    next();  // Proceed to the next middleware or controller
  } catch (err) {
    return res.status(401).json({ message: 'Not authorized', error: err.message });
  }
};

module.exports = protect;
