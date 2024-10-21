const PlaylistModel = require('../models/playlist');

const getPlaylists = async () => {

    try {
        const playlists = await PlaylistModel.find().populate('songs');
        return {
            statusCode: 200,
            ok: true,
            data: playlists
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to get playlists'
        };
    }
};

const createPlaylist = async (playlistData) => {

    try {
        const newPlaylist = new PlaylistModel(playlistData);
        const result = await newPlaylist.save();
        return {
            statusCode: 201,
            ok: true,
            data: result,
            message: 'Playlist created successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to create playlist'
        };
    }
};

const updatePlaylist = async (playlistId, updatedData) => {

    try {
        const result = await PlaylistModel.findByIdAndUpdate(playlistId, updatedData, { new: true });
        return {
            statusCode: 200,
            ok: true,
            data: result,
            message: 'Playlist updated successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to update playlist'
        };
    }
};

const deletePlaylist = async (playlistId) => {

    try {
        const result = await PlaylistModel.findByIdAndDelete(playlistId);
        return {
            statusCode: 200,
            ok: true,
            data: result,
            message: 'Playlist deleted successfully'
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            ok: false,
            data: null,
            message: 'Failed to delete playlist'
        };
    }
};

module.exports = { getPlaylists, createPlaylist, updatePlaylist, deletePlaylist };
