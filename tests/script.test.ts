import { sayHello } from "../src/hello-world"
import { sumVarious } from "../src/baby-steps"
import { countLines } from "../src/my-first-io"
import { countLinesAsync } from "../src/my-first-async-io"

const path = require('node:path');
let filePath: string = path.join(__dirname, 'test-file.txt');

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
    countLines(filePath);
    expect(console.log).toHaveBeenCalledWith(4);
  });
});

// 4. my-first-async-io
describe('Should log 4', () => {
  it('should return true', () => {
    countLinesAsync(filePath);
    expect(console.log).toHaveBeenCalledWith(4);
  });
});