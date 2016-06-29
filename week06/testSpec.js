var add = require("../../lib/jasmine_examples/index")

describe("caculation", () => {

  it("should return 0 on empty string", () => {
    expect(add("")).toEqual(0);
  })

  it("should return value to be value", () => {
    expect(add("5")).toEqual(5)
  })

  it("should return total result for two values", () => {
    expect(add("5, 6")).toEqual(11)
  })

  it("should return total result for many values", () => {
    expect(add("5, 6, 3, 9")).toEqual(23)
  })

  it("should return total result for many values", () => {
    expect(add("1\n2,3")).toEqual(6)
  })

  it("should be separate line that looks //[delimiter]\n[numbers…]", () => {
    expect(add("//;\n1;2")).toEqual(3)
  })

  it("should be ignored numbers bigger than 1000", () => {
    expect(add("2, 1001")).toEqual(2)
  })

  it('it should support defining delimiter of any length', () => {
    expect(add("//[***]\n1***2***3")).toEqual(6)
  })

  it('it should support defining multiple delimiters', () => {
    expect(add("//[*][%]\n1*2%3")).toEqual(6)
  })

  it("it should thrown error 'negatives not allowed' with value for negative numbers", () => {
    expect(() => { add('-1') }).toThrow(new Error("Negatives not allowed -1"))
  })

  it('it should thrown error "negatives not allowed" with value for negative numbers', () => {
    expect(() => { add("-1, 2, -4, 1, -6, 3") }).toThrow(new Error("Negatives not allowed -1,-4,-6"))
  })

})
