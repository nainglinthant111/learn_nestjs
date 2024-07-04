import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiKeyMiddleware } from './common/middleware/api-key.middleware';
import { typeOrmConfig } from './config/typeorm.config';
import { StudentModule } from './modules/student/student.module';



@Module({
  imports: [StudentModule,TypeOrmModule.forRoot(typeOrmConfig),],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiKeyMiddleware)
      .forRoutes('*'); // Apply to all routes, or specify specific routes
  }
}