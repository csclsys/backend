import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['*'],
  });

  let options = new DocumentBuilder();
  options.setTitle('Discite API');
  options.setDescription(
    'Alicação servidor desenvolvida para servir o cliente Discite. ' +
    'Com a finalidade de ser um protótipo de Trabalho de Conclusão de Curso de graduação',
  );
  options.setVersion('0.0.1');
  options.addBearerAuth();
  options.setSchemes('http', 'https');

  const document = SwaggerModule.createDocument(app, options.build());
  SwaggerModule.setup('', app, document);

  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
