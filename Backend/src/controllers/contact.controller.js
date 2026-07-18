import Contact from "../models/contact.model.js";

// @desc    Create Contact
// @route   POST /api/contact
// @access  Public
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    const contact = await Contact.create({
      name,
      email: email ?? null,
      phone,
      subject,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Admin
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Get single contact
// @route   GET /api/contact/:id
// @access  Admin
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Mark contact as read/unread
// @route   PUT /api/contact/:id
// @access  Admin
export const updateContact = async (req, res) => {
  try {
    const { isRead } = req.body;

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    contact.isRead = isRead;

    await contact.save();

    res.status(200).json({
      success: true,
      message: "Contact updated successfully.",
      contact,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Admin
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};
