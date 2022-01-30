import { ConfigModule } from '@nestjs/config';
import DatabaseConfig from './src/databases/database.config';

ConfigModule.forRoot({
	isGlobal: true,
	load: [DatabaseConfig],
});

export default DatabaseConfig();