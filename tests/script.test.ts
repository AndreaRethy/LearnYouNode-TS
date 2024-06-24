import { sayHello } from "../src/hello-world"
import { sumVarious } from "../src/baby-steps"

// hello-world.ts test
describe('Should log Hello World', () => {
    it('should return true', () => {
      console.log = jest.fn();
      const hello: string = "HELLO WORLD";
      sayHello(hello);

      expect(console.log).toHaveBeenCalledWith("HELLO WORLD")
    });
  });

  // baby-steps.ts test
  describe('Should log 8', () => {
    it('should return true', () => {
      let sum = sumVarious(...["1", "2", "5"]);

      console.log(sum)

      expect(console.log).toHaveBeenCalledWith(8)
    });
  });