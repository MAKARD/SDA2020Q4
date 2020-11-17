const path = require('path');
const fs = require('fs');

const PropertyUtil = require('./lib/PropertyUtil');
const InvalidFileTypeError = require('./lib/InvalidFileTypeError');
const InvalidDirectoryException = require('./lib/InvalidDirectoryException');
const FileExtensionPredicate = require('./FileExtensionPredicate');

const IMAGES = ['jpg', 'png'];
const DOCUMENTS = ['pdf', 'doc'];

module.exports = class FileManager {
    constructor() {
        this.directoryPath = PropertyUtil.loadProperty('basePath');
    }

    getRetrievedFile(fileName) {
        this.validateFileType(fileName);

        return path.resolve(this.directoryPath + path.sep, fileName);
    }

    getImages() {
        return this.getFiles(this.directoryPath, IMAGES);
    }

    getDocumentFiles() {
        return this.getFiles(this.directoryPath, DOCUMENTS);
    }

    validateFileType(fileName) {
        if (this.isInvalidFileType(fileName)) {
            throw new InvalidFileTypeError('File type not Supported: ' + fileName);
        }
    }

    isInvalidFileType(fileName) {
        return this.isInvalidImage(fileName) && this.isInvalidDocument(fileName);
    }

    isInvalidImage(fileName) {
        const imageExtensionsPredicate = new FileExtensionPredicate(IMAGES);

        return !imageExtensionsPredicate.test(fileName);
    }

    isInvalidDocument(fileName) {
        const documentExtensionsPredicate = new FileExtensionPredicate(DOCUMENTS);
        return !documentExtensionsPredicate.test(fileName);
    }

    getFiles(directoryPath, allowedExtensions) {
        const predicate = new FileExtensionPredicate(allowedExtensions);

        return this.directory(directoryPath).filter(predicate.test);
    }

    getDirectory(directoryPath) {
        const directoryStatus = fs.statSync(directoryPath);

        this.validateDirectory(directoryStatus, directoryPath);

        return fs.readdirSync(directoryPath);
    }

    validateDirectory(status, directoryPath) {
        if (this.isNotDirectory(status)) {
            throw new InvalidDirectoryException('Invalid directory found: ' + directoryPath);
        }
    }

    isNotDirectory(status) {
        return !status.isDirectory();
    }
};
