const express = require("express");
const Customer = require("../models/Customer");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Create customer
router.post("/", auth, async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json(customer);
});

// Get customers
router.get("/", auth, async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// Delete customer
router.delete("/:id", auth, async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.json({ message: "Customer deleted" });
});

module.exports = router;
