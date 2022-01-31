import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RedocOptions, RedocModule } from 'nestjs-redoc';
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

	const redocOptions: RedocOptions = {
		sortPropsAlphabetically: false,
		hideDownloadButton: true,
		hideHostname: true,
		noAutoAuth: true,
		pathInMiddlePanel: true,
		auth: {
		  enabled: true,
		  user: 'narasipeople',
		  password: 'narasipeople',
		},
	  };
	  await RedocModule.setup('core/docs', app, document, redocOptions);
	await app.listen(PORT);
}
bootstrap();
