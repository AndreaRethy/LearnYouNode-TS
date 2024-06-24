// Create a function to add 1 or more numbers
export function sumVarious (...args: string[]): number {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
       let num: number = parseInt(args[i], 10)
       if (!isNaN(num)) {
        result += num;
       }
    }
    return result;
}

console.log(sumVarious(...process.argv));