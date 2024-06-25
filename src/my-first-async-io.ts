const fs = require('node:fs');
export async function countLinesAsync(file: string) {
    let counter = 0;

    fs.readFile(file, 'utf-8', (err: string, data: string) => {
        if (err) {
            console.error('Error: ', err);
            return;
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i] == '\n') {
                counter++;
            }
        }
        console.log(counter);
    });
    
}