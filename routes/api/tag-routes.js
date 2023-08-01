const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  res.json({ message: 'success' });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  res.json({ message: 'success' });
});

router.post('/', (req, res) => {
  // create a new tag
  res.json({ message: 'success' });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  res.json({ message: 'success' });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  res.json({ message: 'success' });
});

module.exports = router;
