const express = require('express');
const router = express.Router();
const { getArtists, create, update, remove } = require('../controllers/artistController');

router.get("/", getArtists);
router.post("/", create);
router.put("/:id", update); // Chỉ định ID cho cập nhật
router.patch("/:id", update); // Cũng có thể dùng PATCH cho cập nhật từng phần
router.delete("/:id", remove); // Chỉ định ID cho xóa

module.exports = router;
