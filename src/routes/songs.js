const express = require('express');
const router = express.Router();
const { getSongs, create, update, remove } = require('../controllers/songController')

router.get("/", getSongs);
router.post("/", create);
router.put("/:id", update);
router.patch("/:id", update);
router.delete("/:id", remove);

module.exports = router;
