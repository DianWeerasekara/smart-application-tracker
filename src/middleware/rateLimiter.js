const rateLimiter = require("express-rate-limit");

const appLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes

  max: 1000, // Limit each IP to 1000 requests per windows

  message: {
    message: "Too many requests from this IP, please try again after 15 minutes",
  },

  standardHeaders: true,
  legacyHeaders: false
});

const loginLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    message: "Too many login attempts. Please try again after 15 minutes.",
  },
});

module.exports = appLimiter;