const express = require("express");

const Book = require("./book");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Create Book
app.post("/api/books", (req, res) => {
  const book = Book.create(req.body);
  res.status(201).json(book);
});

// List Book
app.get('/api/books', (req, res) => {
    const books = Book.list();
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(books);
});

// Get Book
app.get('/api/books/:id', (req, res) => {
    const book = Book.find(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
});

// Update Book
app.put('/api/books/:id', (req, res) => {
    const book = Book.update(req.params.id, req.body);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
});

// Delete Book
app.delete('/api/books/:id', (req, res) => {
    const book = Book.delete(req.params.id);
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.status(200).json(book);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});