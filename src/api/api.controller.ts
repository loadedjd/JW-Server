import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('api')
export class ApiController {

    @Get()
    index(@Res() res: Response): string {

        res.json({
            system: 'admin',
            status: 'up'
        })

        return "";
    }
}
