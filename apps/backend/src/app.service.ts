import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getServiceHealthDetails(): any {
        const healthResult = {
            status: 'OK',
            message: 'ProMan backend service is working!',
            timestamp: new Date().toISOString()
        };

        return healthResult;
    }
}