import { bootstrap } from '../src/application';

describe("This is a simple test for ApplicationService", () => {
  test("Check the run function", () => {
    expect(bootstrap()).toEqual(1);
  });
});
