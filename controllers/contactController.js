// Whenever we make an api method, we give labels to that route

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContact = (req, res) => {
  res.status(200).json({ msg: 'Get all contacts' });
};

// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getAContact = (req, res) => {
  res.status(200).json({ msg: `Get contact with id: ${req.params.id}` });
};

// @desc Creating a contact
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
  res.status(200).json({ msg: 'Create contact' });
};

// @desc Updating a contacts
// @route PUT /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ msg: `Update contact with id: ${req.params.id}` });
};

// @desc Deleting a contacts
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ msg: `Delete contact with id: ${req.params.id}` });
};

module.exports = {
  getContact,
  getAContact,
  createContact,
  updateContact,
  deleteContact,
};
