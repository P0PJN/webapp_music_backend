const artist = require('../models/artist');

const getArtists = async () => {

    try {
        const artists = await artist.find();
        return {
            statusCode: 200,
            ok: true,
            data: artists
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to get artists'
        };
    }
};

const createArtist = async (data) => {

    try {
        const { bio } = data
        const isExist = await Artist.findOne({ title: title }).exec();
        if (isExist) {
            return {
                ok: false,
                statusCode: 400,
                message: `Mo ta nghe si da ton tai!`
            }
        }
        const song = await Artist.create(
            { bio }
        );
        return {
            statusCode: 201,
            ok: true,
            data: result,
            message: 'Artist created successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to create artist'
        };
    }
};

const updateArtist = async (artistId, updatedData) => {
    try {
        const result = await artist.findByIdAndUpdate(artistId, updatedData, { new: true });
        return {
            statusCode: 200,
            ok: true,
            data: result,
            message: 'Artist updated successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to update artist'
        };
    }
};

const deleteArtist = async (artistId) => {
    try {
        const result = await artist.findByIdAndDelete(artistId);
        return {
            statusCode: 200,
            ok: true,
            data: result,
            message: 'Artist deleted successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to delete artist'
        };
    }
};

module.exports = { getArtists, createArtist, updateArtist, deleteArtist };
