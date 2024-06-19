
const Book = require('../models/book');

exports.addBook = async (req, res) => {
  try {
    const { title, author, publicationDate, genres } = req.body;
    const book = await Book.create({ title, author, publicationDate, genres });
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add book' });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve book' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { title, author, publicationDate, genres } = req.body;
    await Book.update({ title, author, publicationDate, genres }, { where: { id: req.params.id } });
    const updatedBook = await Book.findByPk(req.params.id);
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    await Book.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Book deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};
