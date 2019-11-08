import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as system from '../package.json';
import * as bodyParser from 'body-parser';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

   // origin: ['*', 'http://localhost:4200', 'http://127.0.0.1:4200', 'http://192.168.0.58:4200', 'http://192.168.0.53:4200', 'http://192.168.0.53'],

  let options = new DocumentBuilder();
  options.setTitle(system.name);
  options.setDescription(system.description);
  options.setVersion(system.version);
  // options.addBearerAuth();
  options.setSchemes('http', 'https');

  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('', app, document);

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
