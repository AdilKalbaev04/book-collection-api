
module.exports = (requiredRole) => {
    return (req, res, next) => {
      if ((req.user.role & requiredRole) === requiredRole) {
        next();
      } else {
        res.status(403).json({ error: 'Insufficient role' });
      }
    };
  };
  