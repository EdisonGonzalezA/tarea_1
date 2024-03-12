import { Module } from '@nestjs/common';
import { ActoresController } from './actores.controller';
import { ActoresService } from './actores.service';

@Module({
  controllers: [ActoresController],
  providers: [ActoresService]
})
export class ActoresModule {}
