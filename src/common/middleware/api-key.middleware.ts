import { Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  private readonly logger = new Logger(ApiKeyMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const headers = req.headers as { [key: string]: string };
    const apiKey = headers['x-api-key'];
    const validApiKey = process.env.API_KEY ; // Load your API key from environment variables

    this.logger.debug(`Received API Key: ${apiKey}`);

    if (!apiKey || apiKey !== validApiKey) {
      this.logger.debug(`Invalid API Key received: ${apiKey}`);
      throw new UnauthorizedException('Invalid API key');
    } else {
      this.logger.debug(`Valid API Key received: ${apiKey}`);
    }

    next();
  }
}
