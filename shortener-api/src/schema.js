// models/url.js
import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  shortSlug: { type: String, unique: true },
  longUrl: { type: String, required: true },
}, { timestamps: true });

export const UrlModel = mongoose.model('Url', urlSchema);

