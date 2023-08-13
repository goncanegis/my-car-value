import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    cookieSession({
      // Only for development purposes. Will refactor later.
      keys: ['henloo'],
    }),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // This will ignore any properties that are not in the DTO. This will prevent the user from sending extra properties that are not in the DTO.
    }),
  );
  await app.listen(3000);
}
bootstrap();
