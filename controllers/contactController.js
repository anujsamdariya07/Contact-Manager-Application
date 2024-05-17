const asyncHandler = require('express-async-handler');
const Contact = require('../models/contact.model');

// Whenever we make an api method, we give labels to that route
// MongoDb always returns data in the form of promises, for this we use async functions, due to iy we aslo need to write code inside of a try-catch block. Instead of all this we use a middleware asyncHandler

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

// @desc Get a contact
// @route GET /api/contacts/:id
// @access public
const getAContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('ERROR: Contact Not Found!');
  }
  res.status(200).json(contact);
});

// @desc Creating a contact
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  console.log(`The request body is: ${req.body}`);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(404);
    throw new Error('All fields are mandatory!');
  }
  const contact = await Contact.create({
    name: name,
    email: email,
    phone: phone,
  });
  res.status(200).json(contact);
});

// @desc Updating a contacts
// @route PUT /api/contacts/:id
// @access public
const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('ERROR: Contact Not Found!');
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

// @desc Deleting a contacts
// @route DELETE /api/contacts/:id
// @access public
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error('ERROR: Contact Not Found!');
  }
  await Contact.deleteOne(contact);
  console.log(res.deletedCount)
  res.status(200).json(contact);
});

module.exports = {
  getContact,
  getAContact,
  createContact,
  updateContact,
  deleteContact,
};
