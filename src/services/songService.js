const song = require("../models/song");

const getSongs = async () => {

    const songs = await Song.find({});
    return {
        ok: true,
        statusCode: 200,
        data: songs,
        message: "Lay bai hat thanh cong!"
    }
}

const createSong = async (data) => {

    const { title, streamUrl } = data
    const isExist = await Song.findOne({ title: title }).exec();
    if (isExist) {
        return {
            ok: false,
            statusCode: 400,
            message: `Ten ${title} da ton tai!`
        }
    }
    const song = await Song.create(
        { title, streamUrl }
    );
    return {
        ok: true,
        statusCode: 200,
        data: song,
        message: "Tao thanh cong!"
    }
}

const updateSong = async (songId, updatedData) => {
    try {
        const result = await song.findByIdAndUpdate(songId, updatedData, { new: true });
        return {
            statusCode: 200,
            ok: true,
            data: result,
            message: 'Song updated successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to update song'
        };
    }
};

const deleteSong = async (songId) => {
    try {
        const result = await song.findByIdAndDelete(songId);
        return {
            statusCode: 200,
            ok: true,
            data: result,
            message: 'Song deleted successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to delete song'
        };
    }
};

module.exports = {
    getSongs, createSong, updateSong, deleteSong
}