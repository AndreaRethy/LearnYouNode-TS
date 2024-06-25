import { sayHello } from "../src/hello-world"
import { sumVarious } from "../src/baby-steps"
import { countLines } from "../src/my-first-io"
import { countLinesAsync } from "../src/my-first-async-io"
import { listFiles } from "../src/filtered-ls"

const fs = require('node:fs');
const path = require('node:path');
const directory: string = __dirname;

// 1. hello-world
describe('Should log Hello World', () => {
    it('should return true', () => {
      console.log = jest.fn();
      const hello: string = "HELLO WORLD";
      sayHello(hello);

      expect(console.log).toHaveBeenCalledWith("HELLO WORLD")
    });
  });

  // 2. baby-steps
  describe('Should log 8', () => {
    it('should return true', () => {
      let sum = sumVarious(...["1", "2", "5"]);

      console.log(sum)

      expect(console.log).toHaveBeenCalledWith(8)
    });
  });

// 3. my-first-io
describe('Should log 4', () => {
  it('should return true', () => {
    let filePath: string = path.join(directory, 'test-file.txt');
    countLines(filePath);
    expect(console.log).toHaveBeenCalledWith(4);
  });
});

// 4. my-first-async-io
describe('Should log 5', () => {
  it('should return true', async () => {
    let filePath2: string = path.join(directory, 'test-file2.txt');
    await countLinesAsync(filePath2);
    expect(console.log).toHaveBeenCalledWith(5);
  });
});

// 5. filtered-ls
// test('Should log test-file.txt', async () => {
//   await listFiles('ts', directory)
//   expect(console.log).toHaveBeenCalledWith('script.test.ts');
// });

describe('Should log script.test.ts', () => {
  it('should return true', async () => {
    console.log = jest.fn();
    await listFiles('ts', directory);
    expect(console.log).toHaveBeenCalledWith('script.test.ts');
  });
});