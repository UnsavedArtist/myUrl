// controllers/shortener.js
import express from 'express';
import { nanoid } from 'nanoid';
import { UrlModel } from './schema.js';

const router = express.Router();

// POST /shorten
router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) {
    return res.status(400).json({ error: 'longUrl is required' });
  }
  
  // Generate short slug
  const shortSlug = nanoid(6); // e.g., b6sUd9

  // Store in DB
  const newUrl = await UrlModel.create({ shortSlug, longUrl });
  
  // Return short URL
  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
  const shortUrl = `${baseUrl}/${shortSlug}`;
  res.json({ shortUrl });
});

// GET /:shortSlug
router.get('/:shortSlug', async (req, res) => {
  const { shortSlug } = req.params;
  const urlDoc = await UrlModel.findOne({ shortSlug });
  
  if (urlDoc) {
    // Optional: record analytics here or publish to a message queue
    return res.redirect(urlDoc.longUrl);
  } else {
    return res.status(404).json({ error: 'URL not found' });
  }
});

export default router;

