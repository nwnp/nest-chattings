import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import { ValidationPipe } from '@nestjs/common';

async function main() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT;

  app.useStaticAssets(join(__dirname, '../public')); // css 파일 경로 setting
  app.setBaseViewsDir(join(__dirname, '../views')); // html 파일 경로 setting
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT);
}
main();
