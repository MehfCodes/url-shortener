import urlModel from '../model/url.model';

export async function postUrl(req, res) {
  try {
    const url = await urlModel.create(req.body);
    if (!url) {
      throw Error('url shortener failed!');
    }
    res.status(200).json(url);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
export async function getUrl(req, res) {
  try {
    res.status(200).json({ what: 'hi' });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
