import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);

    const port = configService.get<number>('PORT') || 3001;

    app.enableCors();
    await app.listen(port);

    // TODO: Implement logger package and host it in npmjs.
    console.info(`API running on http://localhost:${port}`);
}

bootstrap();