import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Report } from './reports/report.entity';

@Module({
  imports: [
    UsersModule,
    ReportsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Report],

      // IMPORTANT - Development only. In production, you should not synchronize the database because it may corrupt existing data.
      synchronize: true, // Synchronize checks the entities and the database and makes sure they are in sync; it will create or update the tables according to entities
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
