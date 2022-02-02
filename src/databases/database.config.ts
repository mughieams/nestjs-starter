import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv'

dotenv.config({path: __dirname + '/../../env/.env'})

export default registerAs('database', (): any => {
	return {
		type: process.env.DB_CONNECTION,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		entities: [__dirname + '/../**/**/entities/*.entity{.ts,.js}'],
		migrations: [__dirname + '/migrations/*.{ts,.js}'],
		synchronize: false,
		cli: {
			migrationsDir: 'src/databases/migrations',
		}
	};
});
