const path = require("path");
const fs = require('fs');

const publicSubfolder = path.join(__dirname, "public");

const args = process.argv.slice(2);
const targetFolderName = args[0];
const targetFolder = path.join(__dirname, ".." , targetFolderName);

function loadFiles(rootFolder, targetFolder) {
    return new Promise((resolve, reject) => {
        fs.readdir(rootFolder, (err, files) => {
            if (err) {
                reject(err);
            } else {
                let fileList = [];
                let folderList = [];
                files.forEach(file => {
                    if (fs.lstatSync(path.join(rootFolder, file)).isDirectory()) {
                        folderList.push(file);
                    } else {
                        fileList.push(file);
                    }
                });
                resolve({fileList, folderList, rootFolder, targetFolder});
            }
        });
    });
}

function copyFile(source, target) {
    return new Promise((resolve, reject) => {
        fs.copyFile(source, target, function(err) {
            if (err) {
                reject(err);
            }
            resolve(target + " copied!");
        });
    })
}

loadFiles(publicSubfolder, targetFolder)
    .then(({fileList, folderList, rootFolder, targetFolder}) => {
        let copyFiles = fileList.map(file => copyFile(path.join(rootFolder, file), path.join(targetFolder, file)));
        Promise.all(copyFiles).then(responses => responses.forEach(resp => console.log(resp)), error => console.error(error));

        let requests = folderList.map(folder => {
            fs.mkdirSync(path.join(targetFolder, folder));
            return loadFiles(path.join(rootFolder, folder), path.join(targetFolder, folder));
        });
        return Promise.all(requests);
    }, (error) => console.error(error))
    .then(responses => responses.forEach(({fileList, folderList, rootFolder, targetFolder}) => {
        let copyFiles = fileList.map(file => copyFile(path.join(rootFolder, file), path.join(targetFolder, file)));
        Promise.all(copyFiles).then(responses => responses.forEach(resp => console.log(resp)), error => console.error(error));
    }, (error) => console.error(error)));