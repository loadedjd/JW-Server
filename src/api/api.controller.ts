import { Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('api')
export class ApiController {
  @Get()
  index(@Res() res: Response): string {
    res.json({
      system: 'admin',
      status: 'up',
    });

    return '';
  }

  @Post()
  incomingCall(): string {
    return '<?xml version="1.0" encoding="UTF-8"?><Response><Say>Thanks for calling!</Say></Response>';
  }
}
