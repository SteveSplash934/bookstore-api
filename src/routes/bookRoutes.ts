import express from 'express';

const router = express.Router();

router.get('/books', (req, res) => {
  res.send('List of all books');
});

router.get('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.send(`Details of book with ID: ${bookId}`);
});

router.post('/books', (req, res) => {
  res.send('Book created');
});

router.put('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.send(`Book with ID ${bookId} updated`);
});

router.delete('/books/:id', (req, res) => {
  const bookId = req.params.id;
  res.send(`Book with ID ${bookId} deleted`);
});

export default router;
