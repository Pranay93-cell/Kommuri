const express = require('express');
const cors = require('cors');
const path = require('path');

const featuresRouter = require('./routes/features');
const contactRouter = require('./routes/contact');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/features', featuresRouter);
app.use('/api/contact', contactRouter);

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Kommuri server listening on http://localhost:${PORT}`));
