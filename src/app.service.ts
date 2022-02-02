import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
	constructor(private configService: ConfigService) {}
	
	getHello() {
		return {
			status: 200,
			message: 'Hello World!',
			env: this.configService.get('NODE_ENV'),
		};
	}
}
