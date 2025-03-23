const fs = require('fs');
const path = require('path');

exports.saveImage = (url, filename) => {
    return new Promise((resolve, reject) => {
        const filePath = path.join(__dirname, '../images', filename);
        fetch(url)
            .then(res => {
                const dest = fs.createWriteStream(filePath);
                res.body.pipe(dest);
                dest.on('finish', () => resolve(filePath));
                dest.on('error', reject);
            })
            .catch(reject);
    });
};
