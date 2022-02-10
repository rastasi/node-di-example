export namespace ApplicationServiceMock {
  export const run = (message: any): number => {
    console.log('mocked', message);
    return 1;
  }
}