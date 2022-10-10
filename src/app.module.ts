import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AmazonModule } from './amazon/amazon.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [AmazonModule,
    ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
