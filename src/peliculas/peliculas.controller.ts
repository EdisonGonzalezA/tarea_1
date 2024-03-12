import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { PeliculaDTO } from './peliculas.dto';

@Controller('api/v1/peliculas')
export class PeliculasController {
    constructor(private peliculasServicio: PeliculasService) {}
  
    @Get()
    todos() {
      return this.peliculasServicio.todos();
    }
  
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.peliculasServicio.uno(id);
    }
    @Post()
    insertar(@Body() pelicula: PeliculaDTO) {
      return this.peliculasServicio.insertar(pelicula);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() pelicula: PeliculaDTO) {
      return this.peliculasServicio.actualizar(id, pelicula);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.peliculasServicio.eliminar(id);
    }
}
