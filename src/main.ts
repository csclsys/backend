import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as system from '../package.json';

const port = process.env.PORT || 8080;

async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  app.enableCors( {
    origin: [ '*' ],
  } );

  let options = new DocumentBuilder();
  options.setTitle( system.name );
  options.setDescription( system.description );
  options.setVersion( system.version );
  // options.addBearerAuth();
  options.setSchemes( 'https', 'http' );

  const document = SwaggerModule.createDocument( app, options.build() );
  SwaggerModule.setup( '', app, document );

  await app.listen( port );
  Logger.log( `Server running on http://localhost:${port}`, 'Bootstrap' );
}
bootstrap();
