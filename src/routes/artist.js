const express = require('express');
const router = express.Router();
const { getArtists, create, update, remove } = require('../controllers/artistController');

router.get("/", getArtists);
router.post("/", create);
router.put("/:id", update);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
