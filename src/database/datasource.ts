import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';

config();

const configService = new ConfigService();
console.log('magno malte');
console.log(configService.get('DB_HOST'));

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get('DB_HOST'),
  port: configService.get('DB_PORT'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  database: configService.get('DB_NAME'),
  entities: [__dirname + 'database/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + 'database/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  logging: configService.get('NODE_sENV') !== 'production',
};
const AppDataSource = new DataSource(dataSourceOptions);

// You might want to do
// dataSource.initialize()
// but I found mine working regardless of it

export default AppDataSource;
