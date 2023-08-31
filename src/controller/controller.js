const {
  generatePresignedUrlForPut,
  generatePresignedUrlForGet,
} = require("../service/service");

const getPresignedUrlForPut = async (req, res) => {
  const name = req.body.name;
  console.log(req.body.name);
  const presignedUrl = await generatePresignedUrlForPut(name);
  console.log(presignedUrl);
  res
    .status(200)
    .send({ message: "getPresignedUrlForPut is working", presignedUrl });
};

const getPresignedUrlForGet = async (req, res) => {
  const name = req.query.name;
  console.log(name);
  const presignedUrl = await generatePresignedUrlForGet(name);
  console.log(presignedUrl);
  res
    .status(200)
    .send({ message: "getPresignedUrlForGet is working", presignedUrl });
};

module.exports = { getPresignedUrlForPut, getPresignedUrlForGet };
