const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // find all categories including its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product },],
    });
    // console.log('categoryData:',categoryData);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  // find one category by its `id` value, including its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product },],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id.' });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id.' });
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({ message: `Category with id ${req.params.id} successfully deleted.` });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
