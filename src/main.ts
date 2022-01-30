import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: true,
		logger: ['error', 'warn', 'log'],
	});

	const options = new DocumentBuilder()
		.setTitle('API Documentation')
		.setDescription('Welcome to API Documentation')
		.setVersion('1.0.0')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, options, {
		ignoreGlobalPrefix: false,
	});

	SwaggerModule.setup('docs', app, document);
	await app.listen(PORT);
}
bootstrap();
