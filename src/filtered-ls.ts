// const extension = process.argv[3]
// const directory = process.argv[2]

const path = require('node:path');
const fs = require('node:fs');

export async function listFiles(extension: string, directory: string) {
    fs.readdir(directory, (err: string, list: string[]) => {
        if (err) {
            console.error('Error: ', err);
            process.exit(1);
        } 
        list.forEach(file => {
            // get extension
            const fileExtension = path.extname(file);
    
            if (('.' + extension) == fileExtension){
                console.log(file);
            }
        });
    });
}

