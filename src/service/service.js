const AWS = require("aws-sdk");
const uuidv4 = require("uuid").v4;

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRETE_ACCESS_KEY,
  region: "ap-northeast-2",
});

const s3 = new AWS.S3();

const generatePresignedUrlForPut = async (name) => {
  const fileName = `${name}.jpg`;
  const params = {
    Bucket: "corsproblem332",
    Key: fileName,
    ContentType: "image/jpeg",
    Expires: 60 * 60,
  };
  return await s3.getSignedUrl("putObject", params);
};

const generatePresignedUrlForGet = async (name) => {
  const fileName = `${name}.jpg`;
  const params = {
    Bucket: "corsproblem332",
    Key: fileName,
    Expires: 60 * 60,
    ResponseContentDisposition: "inline",
  };
  return await s3.getSignedUrl("getObject", params);
};

module.exports = { generatePresignedUrlForGet, generatePresignedUrlForPut };
