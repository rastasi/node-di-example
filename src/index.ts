import { ApplicationService } from '@node-di-example/services'

const bootstrap = () => {
  ApplicationService.run('Hello!')
}

bootstrap();