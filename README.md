# cloudflare-worker-lambda-gateway

This repository is just example for Cloudflare Worker works as AWS Lambda gateway :)

## Try it

Check out and install dependencies:

```
git clone https://github.com/ysugimoto/cloudflare-worker-lambda-gateway.git
cd cloudflare-worker-lambda-gateway
npm install
```

To call Lambda function, you need to set access keys as environment variables:

```
export AWS_ACCESS_KEY_ID=[your access key ID]
export AWS_SECRET_ACCESS_KEY=[your secret access key]
```

Of course your keys should have Lambda execute related access policies:

- AWSLambdaExecute
- AWSLambdaRole

Above policies is the minimum to work, and you have to create Lambda function. `lambda/handler.js` is just example function.
After you did all above things, build woker script:

```
npm run build
```

You can find a built file at `dist/worker.js`. copy script and paste to [Cloudflare worker playground](https://cloudflareworkers.com/)
After update worker, you can get Lambda function response at URL of "https://tutorial.cloudflareworkers.com/[function name]"

Enjoy!




