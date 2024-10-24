const songService = require('../services/songService');

const getSongs = async (req, res) => {

    try {
        const result = await songService.getSongs();
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            data: null
        })
    }
}

const createSong = async (req, res) => {

    try {
        const result = await songService.createSong(req.body);
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data,
            message: result.message
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            data: null
        })
    }
}

const updateSong = async (req, res) => {

    try {
        const _id = req.params.id;
        const title = req.body.title
        const result = await songService.updateSong(_id, title);
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data,
            message: result.message
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            data: null
        })
    }
}

const deleteSong = async (req, res) => {

    try {
        const _id = req.params.id;
        const result = await songService.deleteSong(_id);
        return res.status(result.statusCode).json({
            ok: result.ok,
            data: result.data,
            message: result.message
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            data: null
        })
    }
}

module.exports = {
    getSongs, createSong,
    updateSong, deleteSong
}
