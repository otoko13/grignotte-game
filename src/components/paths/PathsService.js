const PATH_PREFIXES = {
    IMAGE: 'images',
    AUDIO: 'sounds',
};

class PathsService {

    static getImagePath(filename) {
        return `${PATH_PREFIXES.IMAGE}/${filename}`;
    }

    static getAudioPath(filename) {
        return `${PATH_PREFIXES.AUDIO}/${filename}`;
    }
}

export default PathsService;
