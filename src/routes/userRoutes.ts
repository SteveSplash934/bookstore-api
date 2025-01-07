import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('Login page');
});

router.get('/register', (req, res) => {
  res.send('Registration page');
});

router.get('/dashboard', (req, res) => {
  res.send('User dashboard');
});


export default router;
