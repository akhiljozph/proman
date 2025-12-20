import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getServiceHealthDetails(): any {
        const healthResult = {
            status: 'OK',
            message: 'Hey, why are you doubting me? I\'m here!',
            timestamp: new Date().toISOString()
        };

        return healthResult;
    }
}