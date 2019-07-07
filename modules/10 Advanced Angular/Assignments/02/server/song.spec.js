const { removeSong, addSong } = require('./song');

describe('Given an array of songs and an index', () => {
    const sampleSongs = [{
        id: 1,
        title: "xx",
        singer: "xxxxxx",
        words: "xxxxxxxxxxx xxx xxxxx",
    }];
    const index = 0;
    const selectedSong = sampleSongs[index];
    describe('When removing a song at this index', () => {
        const newSampleSongs = removeSong(sampleSongs, index);
        it('Then array length should be decreased by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length - 1);
        });
        it('Then this index should not be contained in the array', () => {
            expect(newSampleSongs[index]).not.toBe(selectedSong);
        });
    })

    describe.only('When add a song', () => {
        const song = "let it be";
        const newSampleSongs = addSong(sampleSongs, song);
        it('Then array length should be increase by one', () => {
            expect(newSampleSongs.length).toBe(sampleSongs.length + 1);
        });
        it('Then array length should be increase by one', () => {
            expect(typeof newSampleSongs[0].title).toBe("string");
        });
    })
});