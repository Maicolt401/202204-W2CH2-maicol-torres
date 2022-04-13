const strictEquals = (a, b) => {
  if (Object.is(a, NaN) && Object.is(NaN, b)) {
    return false;
  } else if (Object.is(0, a) && Object.is(-0, b)) {
    return true;
  } else if (Object.is(-0, a) && Object.is(0, b)) {
    return true;
  }
  return Object.is(a, b);
};

describe("Given a strictEquals function", () => {
  describe("When it receives values a and b ", () => {
    test("Then it should return true", () => {
      const a = 1;
      const b = 1;
      const numberResult = true;

      const numberTrue = strictEquals(a, b);

      expect(numberTrue).toBe(numberResult);
    });
  });

  describe("When it receives values NaN and NaN ", () => {
    test("Then it should return false", () => {
      const a = NaN;
      const b = NaN;
      const numberResult = false;

      const isItTrue = strictEquals(a, b);

      expect(isItTrue).toBe(numberResult);
    });
  });

  describe("When it receives values 0 and -0 ", () => {
    test("Then it should return true", () => {
      const a = 0;
      const b = -0;
      const numberResult = true;

      const isItTrue = strictEquals(a, b);

      expect(isItTrue).toBe(numberResult);
    });
  });

  describe("When it receives values -0 and 0 ", () => {
    test("Then it should return true", () => {
      const a = -0;
      const b = 0;
      const numberResult = true;

      const isItTrue = strictEquals(a, b);

      expect(isItTrue).toBe(numberResult);
    });
  });

  describe("When it receives values 1 and `1 `!", () => {
    test("Then it should return true", () => {
      const a = 1;
      const b = "1";
      const numberResult = false;

      const isItTrue = strictEquals(a, b);

      expect(isItTrue).toBe(numberResult);
    });
  });

  describe("When it receives values true and false", () => {
    test("Then it should return false", () => {
      const value1 = 1;
      const value2 = 1;
      const numberResult2 = true;

      const a = 1;
      const b = "1";
      const numberResult = false;

      const isItflase = strictEquals(a, b);

      expect(isItflase).toBe(numberResult, numberResult2);
    });
  });

  describe("When it receives values true and false", () => {
    test("Then it should return false", () => {
      const a = 1;
      const b = "1";
      const numberResult = false;
      const value1 = 1;
      const value2 = "1";
      const numberResult2 = false;

      const isItflase = strictEquals(a, b);

      expect(isItflase).toBe(numberResult, numberResult2);
    });
  });

  describe("When it receives values `wate` and `oil` ", () => {
    test("Then it should return false", () => {
      const a = 1;
      const b = "1";
      const numberResult = false;
      const value1 = 1;
      const value2 = "1";
      const numberResult2 = false;

      const isItflase = strictEquals(a, b);

      expect(isItflase).toBe(numberResult, numberResult2);
    });
  });
});
