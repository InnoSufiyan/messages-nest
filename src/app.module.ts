import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesRepository } from './app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MessagesRepository],
})
export class AppModule { }
