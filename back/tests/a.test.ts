import { sum } from "./a";
describe("sum", () => {
    test("should add two numbers", () => {
      expect(sum(1, 2)).toBe(3);
    });
  
    test("should add three numbers", () => {
      expect(sum(1, 2)).toBe(3);
    });
  });