import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  listMessages(): void {
    this.appService.findAll();
  }
  @Post()
  createMessage(@Body() body: CreateMessageDto): void {
    console.log(body);
    console.log('create message');
    this.appService.create(body.content);
  }
  @Get(':id')
  async getMessage(@Param('id') id: string): Promise<string> {
    console.log('get message');
    const message = await this.appService.findOne(id);
    if (!message) throw new NotFoundException('message not found')
    return message;
  }
}
