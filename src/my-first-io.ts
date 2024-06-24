export function countLines(filePath: string) {
    const fs = require('node:fs');
    let counter: number = 0;

    const text = fs.readFileSync(filePath, 'utf-8');
    for (let i = 0; i < text.length; i++) {
        if (text[i] == '\n') {
            counter++;
        }
    }
    console.log(counter);
}