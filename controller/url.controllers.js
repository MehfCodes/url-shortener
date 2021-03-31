import { nanoid } from 'nanoid';
import urlModel from '../model/url.model';

export async function postUrl(req, res) {
  try {
    const url = await urlModel.create({ ...req.body, short: nanoid(12) });
    if (!url) {
      throw Error('url shortener failed!');
    }
    res.status(200).send(url);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
export async function getUrl(req, res, query) {
  try {
    res.status(200).json({ what: 'hi' });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
