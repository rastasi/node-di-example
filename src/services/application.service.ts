export namespace ApplicationService {
  export const run = (message: any): number => {
    console.log(message);
    return 1;
  }
}