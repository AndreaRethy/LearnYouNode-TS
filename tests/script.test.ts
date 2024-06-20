import { sayHello } from "../src/hello-world"

// tests/sample.test.ts
describe('Should log Hello World', () => {
    it('should return true', () => {
      console.log = jest.fn();
      const hello: string = "HELLO WORLD";
      sayHello(hello);

      expect(console.log).toHaveBeenCalledWith("HELLO WORLD")
    });
  });