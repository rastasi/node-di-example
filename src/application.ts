import { ApplicationService } from '@node-di-example/services'

export const bootstrap = () => {
  return ApplicationService.run('Hello!')
}