const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  try {
    // find all categories
    // be sure to include its associated Products
  } catch (err) {
  }
});

router.get('/:id', (req, res) => {
  try {
    // find one category by its `id` value
    // be sure to include its associated Products
  } catch (err) {
  }
});

router.post('/', (req, res) => {
  try {
    // create a new category
  } catch (err) {
  }
});

router.put('/:id', (req, res) => {
  try {
    // update a category by its `id` value
  } catch (err) {
  }
});

router.delete('/:id', (req, res) => {
  try {
    // delete a category by its `id` value
  } catch (err) {
    
  }
});

module.exports = router;
