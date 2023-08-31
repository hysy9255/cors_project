const express = require("express");
const router = express.Router();
const controller = require("./../controller/controller.js");

router.put("/presignedUrl", controller.getPresignedUrlForPut);
router.get("/presignedUrl", controller.getPresignedUrlForGet);

module.exports = router;
