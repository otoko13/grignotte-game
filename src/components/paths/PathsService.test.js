import PathsService from './PathsService';

describe('getImagePath', () => {
    it('should return the correctly prefixed image path', () => {
        expect(PathsService.getImagePath('someImage.jpg')).toEqual('images/someImage.jpg');
    });
});

describe('getAudioPath', () => {
    it('should return the correctly prefixed image path', () => {
        expect(PathsService.getAudioPath('someSound.ogg')).toEqual('sounds/someSound.ogg');
    });
});
