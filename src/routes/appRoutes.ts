import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/about-us', (req, res) => {
  res.render('about-us');
});

router.get('/contact-us', (req, res) => {
  res.render('contact-us');
});

router.post('/contact-us', (req, res) => {
    // res.render('contact-us');
    res.send('Thank you for contacting us');
});

router.get('/help', (req, res) => {
  res.render('help');
});

router.get('/developer-api', (req, res) => {
  res.render('developer-api');
});

export default router;
