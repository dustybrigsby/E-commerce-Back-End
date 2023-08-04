const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags including its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product },],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` including its associated Product data  
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product },],
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id.' });
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
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
