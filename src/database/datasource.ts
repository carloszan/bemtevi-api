import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: parseInt(configService.get<string>('DB_PORT'), 5432),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + 'database/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + 'database/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: configService.get('NODE_ENV') !== 'production',
};
const AppDataSource = new DataSource(dataSourceOptions);

// You might want to do
// dataSource.initialize()
// but I found mine working regardless of it

export default AppDataSource;
