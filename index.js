const aws4 = require('aws4');

addEventListener('fetch', event => {
  event.respondWith(lambdaProxy(event.request));
});

const credentials = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

/**
 * Fetch and log a given request object
 * @param {Request} request request
 * @return {Promise} -
 *
 */
function lambdaProxy(request) {
  const u = new URL(request.url);
  const fn = u.pathname === '/' ? '/index' : u.pathname;
  const req = aws4.sign({
    method: 'POST',
    service: 'lambda',
    region: 'ap-northeast-1',
    path: `/2015-03-31/functions${fn}/invocations/`,
    body: '{}'
  }, credentials);

  return fetch(`https://${req.hostname}/${req.path}`, {
    method: req.method,
    headers: req.headers,
    body: req.body
  });
}
