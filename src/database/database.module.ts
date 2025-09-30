import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from '../database/datasource';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource)],
  exports: [],
})
export class DatabaseModule {}
