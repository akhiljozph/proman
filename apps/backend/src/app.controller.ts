import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health Check Endpoints')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) { }

    @Get('health-check')
    getServiceHealthDetails() {
        return this.appService.getServiceHealthDetails();
    }
}