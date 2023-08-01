const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.json({ message: 'success' });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.json({ message: 'success' });

});

router.post('/', (req, res) => {
  // create a new category
  res.json({ message: 'success' });

});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  res.json({ message: 'success' });

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  res.json({ message: 'success' });
});

module.exports = router;
