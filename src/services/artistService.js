const artist = require('../models/artist');
const Artist = require('../models/artist');

const getArtists = async () => {
    try {
        const artists = await ArtistModel.find();
        return { statusCode: 200, ok: true, data: artists };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, ok: false, data: null, message: 'Failed to get artists' };
    }
};

const createArtist = async (data) => {
    try {
        const { artistname, bio, genre } = data
        const isExist = await Artist.findOne({ artistname, bio, genre }).exec();
        if (!artistname || !bio || !genre) {
            return {
                statusCode: 400,
                ok: false,
                message: 'Thiếu các trường bắt buộc!'
            };
        }
        if (isExist) {
            return {
                ok: false,
                statusCode: 400,
                message: `Mo ta nghe si da ton tai!`
            }
        }
        const artist = await Artist.create(
            { artistname, bio, genre }
        );
        return {
            ok: true,
            statusCode: 200,
            data: artist,
            message: "Tao thanh cong!"
        }
    } catch (error) {
        console.error(error);
        return { statusCode: 500, ok: false, data: null, message: 'Failed to create artist' };
    }
};

const updateArtist = async (artistId, updatedData) => {
    try {
        const result = await ArtistModel.findByIdAndUpdate(artistId, updatedData, { new: true });
        return { statusCode: 200, ok: true, data: result, message: 'Artist updated successfully' };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, ok: false, data: null, message: 'Failed to update artist' };
    }
};

const deleteArtist = async (artistId) => {
    try {
        const result = await ArtistModel.findByIdAndDelete(artistId);
        return { statusCode: 200, ok: true, data: result, message: 'Artist deleted successfully' };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, ok: false, data: null, message: 'Failed to delete artist' };
    }
};

module.exports = { getArtists, createArtist, updateArtist, deleteArtist };
