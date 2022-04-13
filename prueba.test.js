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
    describe("Then it should return true", () => {
      const a = 1;
      const b = 1;
      const numberResult = true;

      const isItTrue = strictEquals(a, b);

      expect(isItTrue).toBe(numberResult);
    });
  });
});
