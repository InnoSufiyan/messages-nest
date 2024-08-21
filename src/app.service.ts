import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './app.repository';

@Injectable()
export class AppService {
  constructor(public messageRepository: MessagesRepository) { }

  findOne(id: string) {
    return this.messageRepository.findOne(id);
  }

  findAll() {
    return this.messageRepository.findAll();
  }

  create(content: string) {
    return this.messageRepository.create(content);
  }
}
