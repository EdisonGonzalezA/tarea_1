import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PeliculasModule } from './peliculas/peliculas.module';
import { ActoresModule } from './actores/actores.module';

@Module({
  imports: [PeliculasModule, ActoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
