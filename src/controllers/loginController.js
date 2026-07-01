const bcrypt = require('bcryptjs');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;

        // check the user exists
        const user = await User.findOne({ email });

        if(!user) {
            return res.status(404).json({
                message: "Invalid credentials"
            })
        }

        // check the password
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if(!isPasswordCorrect) {
            return res.status(404).json({
                message: "Invalid credentials"
            })
        }

        // token generation
        const token = generateToken(user);

        res.status(200).json({
            token,
            user: {
                id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role: user.role
            }
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      first_name,
      last_name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user),
      user: {
        id: user._id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};