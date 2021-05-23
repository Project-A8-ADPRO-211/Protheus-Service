const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const aws = require('aws-sdk');

const s3 = new aws.S3();
s3.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION
});

function getSignedUrl(req,res,next) {
    let imageName = req.query.name
    let fileName = "images/"+imageName
    const params = {
        Bucket: AWS_BUCKET_NAME,
        Key: fileName,
        Expires: 3600,
        ContentType: 'image/jpeg'
    }
    const put_url = s3.getSignedUrl('putObject', params)
    return res.status(200).json({
        putUrl: put_url,
        getUrl: put_url.split("?")[0]
    })
}

const routes = express.Router({
    mergeParams: true
});

routes.route('/get-signed-url')
    .get(getSignedUrl);

const app = express();

app.use(cors());
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use('/', routes);

module.exports = app;