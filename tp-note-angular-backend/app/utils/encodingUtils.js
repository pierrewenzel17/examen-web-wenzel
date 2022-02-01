import * as fs from 'fs';

function base64_encode(file) {
    let bitmap;
    try{
        bitmap = fs.readFileSync("data/pictures/" + file);
    } catch (e){
        return null;
    }
    return 'data:image/jpg;base64,' + new Buffer(bitmap).toString('base64');
}

export {base64_encode};
