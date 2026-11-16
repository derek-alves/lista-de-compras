import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS for Frontend SPA
  app.enableCors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  });

  // Global API Prefix
  app.setGlobalPrefix('api');

  // Global Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger Documentation Setup
  const config = new DocumentBuilder()
    .setTitle('Feira & Cia API')
    .setDescription('API REST do sistema de listas de compras e gestão de feira')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`🚀 API Feira & Cia rodando em: http://localhost:${port}/api`);
  console.log(`📚 Swagger Docs disponível em: http://localhost:${port}/api/docs`);
}
bootstrap();
