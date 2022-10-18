import { AppConfigService } from '@core/config/appConfig.service';
import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableShutdownHooks();
  // todo
  app.enableVersioning({
    type: VersioningType.URI,
  });
  const options = new DocumentBuilder()
    .setTitle('API')
    .setDescription('API docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  const appConfig = app.get(AppConfigService);
  console.log('App is running on: ' + appConfig.url + '/');
  console.log('Swagger is running on: ' + appConfig.url + '/swagger');

  await app.listen(appConfig.port);
}
bootstrap();
