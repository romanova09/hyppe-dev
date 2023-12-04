/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../Controller/app.controller';
import { AppService } from '../Service/app.service';
import { SearchModule } from './search.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/', {
      connectionName: 'hyppe-dev',
      dbName: 'hyppe-dev'
    }),
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
