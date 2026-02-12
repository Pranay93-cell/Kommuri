const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs-extra');

const DATA = path.join(__dirname, '..', 'data', 'contacts.json');

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'name, email and message are required' });

  const entry = {
    id: Date.now(),
    name,
    email,
    phone: phone || '',
    message,
    createdAt: new Date().toISOString()
  };

  try {
    await fs.ensureFile(DATA);
    const arr = await fs.readJson(DATA).catch(() => []);
    arr.push(entry);
    await fs.writeJson(DATA, arr, { spaces: 2 });
    res.status(201).json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to save contact' });
  }
});

module.exports = router;
