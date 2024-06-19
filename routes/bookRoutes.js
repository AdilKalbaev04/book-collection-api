const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, bookController.addBook);
router.get('/', bookController.getBooks);
router.get('/:id', bookController.getBookById);
router.put('/:id', authMiddleware, bookController.updateBook);
router.delete('/:id', authMiddleware, bookController.deleteBook);

module.exports = router;
