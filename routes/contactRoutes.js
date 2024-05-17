const express = require('express');
const router = express.Router();
const {
  getContact,
  getAContact,
  createContact,
  updateContact,
  deleteContact,
} = require('../controllers/contactController');
const validateToken = require('../middlewares/validateTokenHandler');

router.use(validateToken);

router.route('/').get(getContact).post(createContact);

router.route('/:id').get(getAContact).put(updateContact).delete(deleteContact);

module.exports = router;
