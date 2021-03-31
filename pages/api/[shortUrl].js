// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUrl, postUrl } from '../../controller/url.controllers';
import { connectToDB } from '../../util/db';

export default async (req, res) => {
  await connectToDB();
  const {
    query: { shortUrl },
    method,
  } = req;
  switch (method) {
    case 'POST':
      postUrl(req, res);
      break;
    case 'GET':
      getUrl(req, res, shortUrl);
      break;
    default:
      break;
  }

  // res.json({ shortUrl, method });
};
