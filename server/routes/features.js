const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs-extra');

const DATA = path.join(__dirname, '..', 'data', 'features.json');

router.get('/', async (req, res) => {
  try {
    await fs.ensureFile(DATA);
    const features = await fs.readJson(DATA).catch(() => []);
    res.json(features);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'failed to read features' });
  }
});

module.exports = router;
