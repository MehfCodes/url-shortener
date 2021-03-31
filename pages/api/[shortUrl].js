// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getUrl, postUrl } from '../../controller/url.controllers';
import { connectToDB } from '../../util/db';

export default async (req, res) => {
  await connectToDB();
  const {
    query: { shortUrl },
    method,
  } = req;
  console.log(method, shortUrl, req.body);
  if (method === 'POST' && shortUrl === 'url') {
    await postUrl(req, res);
  }
  if (method === 'GET') {
    await getUrl(req, res, shortUrl);
  }
};
