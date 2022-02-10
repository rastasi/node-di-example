import { ApplicationService } from '@node-di-example/services'

describe("This is a simple test for ApplicationService", () => {
  test("Check the run function", () => {
    expect(ApplicationService.run('Test')).toEqual(1);
  });
});
