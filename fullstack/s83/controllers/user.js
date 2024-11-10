// controllers/user.js
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../auth');
const { errorHandler } = require('../auth');

module.exports.registerUser = (req, res) => {
    let newUser = new User({
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10)
    });

    const isValidEmail = (email) => {
        return email.includes('@');         
    };

    const isValidPassword = (password) => {
        return password.length >= 8;
    };

    const { email, password } = req.body;

    if(!isValidEmail(email)) {
        return res.status(400).send({ error: 'Email invalid'});
    } else if(!isValidPassword(password)) {
        return res.status(400).send({ error: 'Password must be atleast 8 characters'});
    }

    return newUser.save()
    .then((result) => res.status(201).send({ message: 'Registered Successfully'}))
    .catch(err => errorHandler(err, req, res))
};

module.exports.loginUser = (req, res) => {
    if(!req.body.email.includes('@')) {
        return res.status(400).send({ error: 'Invalid email'});
    }

    return User.findOne({ email: req.body.email })
    .then((result) => {
        if (!result) {
            return res.status(404).send({ error: 'No email found' });
        } else {
            const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
            if (isPasswordCorrect) {
                return res.status(200).send({ access : auth.createAccessToken(result)})
            } else {
                return res.status(401).send({ error: 'Email and password do not match'})
            }
        }
    })
    .catch((err) => errorHandler(err, req, res));
};


// // Error handling function
// const errorHandler = (error, req, res) => {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error', error: error.message });
// };

// // User registration
// module.exports.registerUser = async (req, res) => {
//     const { email, password } = req.body;

//     // Validate email and password
//     if (!email || !email.includes("@")) {
//         return res.status(400).json({ message: 'Invalid email format' });
//     }
//     if (!password || password.length < 8) {
//         return res.status(400).json({ message: 'Password must be at least 8 characters long' });
//     }

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'Email already registered' });
//         }

//         // Create a new user
//         const newUser = new User({
//             email,
//             password: bcrypt.hashSync(password, 10), // Hash password
//         });

//         await newUser.save();
//         res.status(201).json({ message: 'Registered Successfully' });
//     } catch (error) {
//         errorHandler(error, req, res);
//     }
// };

// // User login
// module.exports.loginUser = async (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !email.includes('@')) {
//         return res.status(400).json({ message: 'Invalid email format' });
//     }

//     try {
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).json({ message: 'No user found with this email' });
//         }

//         // Compare passwords
//         const isPasswordCorrect = bcrypt.compareSync(password, user.password);

//         if (isPasswordCorrect) {
//             // Generate and return access token
//             return res.status(200).json({
//                 access: auth.createAccessToken(user),
//             });
//         } else {
//             return res.status(401).json({ message: 'Incorrect email or password' });
//         }
//     } catch (error) {
//         errorHandler(error, req, res);
//     }
// };
