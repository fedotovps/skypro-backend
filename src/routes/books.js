const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

const router = require("express").Router();

router.get("/books", getBooks);
router.get("/books/:bookid", getBook);
router.post("/books", createBook);
router.patch("/books/:bookid", updateBook);
router.delete("/books/:bookid", deleteBook);

module.exports = router;
