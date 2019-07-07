function removeSong(songs, index) {
    let newSongs;
    newSongs = [...songs]; // clone
    newSongs.splice(index, 1);
    return newSongs;
}

function addSong(songs, song) {
    let newSongs = [...songs]; //clone
    newSongs.push(song);
    return newSongs;
}

module.exports = {
    removeSong,
    addSong
}