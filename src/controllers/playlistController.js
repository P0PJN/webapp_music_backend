const playlistService = require('../services/playlistService');

const getPlaylists = async (req, res) => {
    try {
        const result = await playlistService.getPlaylists();
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: null
        });
    }
};

const create = async (req, res) => {
    try {
        const result = await playlistService.createPlaylist(req.body);
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data,
            message: result.message
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            data: null
        });
    }
};

const update = async (req, res) => {
    try {
        const playlistId = req.params.id;
        const updatedData = req.body;
        const result = await playlistService.updatePlaylist(playlistId, updatedData);
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data,
            message: result.message
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            data: null
        });
    }
};

const remove = async (req, res) => {
    try {
        const playlistId = req.params.id;
        const result = await playlistService.deletePlaylist(playlistId);
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data,
            message: result.message
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            data: null
        });
    }
};

module.exports = { getPlaylists, create, update, remove };
