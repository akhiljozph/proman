import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const port = configService.get<number>('PORT') || 3001;

    app.enableCors();
    await app.listen(port);
    console.log(`API running on http://localhost:${port}`);
}
bootstrap();