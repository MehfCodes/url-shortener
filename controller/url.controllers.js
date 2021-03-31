import { nanoid } from 'nanoid';
import urlModel from '../model/url.model';

export async function postUrl(req, res) {
  try {
    const url = await urlModel.create({ ...req.body, short: nanoid(12) });
    if (!url) {
      throw Error('url shortener failed!');
    }
    res.send(url);
  } catch (error) {
    res.json({ message: error.message });
  }
}
export async function getUrl(req, res, shortUrl) {
  try {
    const url = await urlModel.findOne({ short: shortUrl });
    if (!url) {
      throw new Error('url not found!');
    }

    res.json(url);
  } catch (error) {
    res.json({ message: error.message });
  }
}
