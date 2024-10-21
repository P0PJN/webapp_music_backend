const artistService = require('../services/artistService');

const getArtists = async (req, res) => {
    try {
        const result = await artistService.getArtists();
        return res.status(result.statusCode).json({ ok: result.ok, data: result.data });
    } catch (error) {
        return res.status(500).json({ ok: false, data: null });
    }
};

const create = async (req, res) => {
    try {
        const result = await artistService.createArtist(req.body);
        return res.status(result.statusCode).json({ ok: result.ok, data: result.data, message: result.message });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, data: null });
    }
};

const update = async (req, res) => {
    try {
        const artistId = req.params.id;
        const updatedData = req.body;
        const result = await artistService.updateArtist(artistId, updatedData);
        return res.status(result.statusCode).json({ ok: result.ok, data: result.data, message: result.message });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, data: null });
    }
};

const remove = async (req, res) => {
    try {
        const artistId = req.params.id;
        const result = await artistService.deleteArtist(artistId);
        return res.status(result.statusCode).json({ ok: result.ok, data: result.data, message: result.message });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, data: null });
    }
};

module.exports = { getArtists, create, update, remove };
