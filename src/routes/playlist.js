const express = require('express');
const router = express.Router();
const { getPlaylists, create, update, remove } = require('../controllers/playlistController');

router.get("/", getPlaylists);
router.post("/", create);
router.put("/:id", update);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
