const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
  } catch (err) {
  }
});

router.get('/:id', (req, res) => {
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
  } catch (err) {
  }
});

router.post('/', (req, res) => {
  try {
    // create a new tag
  } catch (err) {
  }
});

router.put('/:id', (req, res) => {
  try {
    // update a tag's name by its `id` value
  } catch (err) {
  }
});

router.delete('/:id', (req, res) => {
  try {
    // delete on tag by its `id` value
  } catch (err) {
  }
});

module.exports = router;
