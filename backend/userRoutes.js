import express from 'express';
import {User, createUser} from './models/User.js' 


const router = express.Router(); // Create an Express router

// POST endpoint to create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await createUser({
       username: req.body.username,
       phone: req.body.phone,
       email: req.body.email,
       password: req.body.password
     });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;