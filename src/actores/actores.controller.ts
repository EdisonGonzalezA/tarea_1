import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActoresService } from './actores.service';
import { ActorDTO } from './actores.dto';

@Controller('api/v1/actores')
export class ActoresController {
    constructor(private actoresServicio: ActoresService) {}
  
    @Get()
    todos() {
      return this.actoresServicio.todos();
    }
  
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.actoresServicio.uno(id);
    }
    @Post()
    insertar(@Body() actor: ActorDTO) {
      return this.actoresServicio.insertar(actor);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() actor: ActorDTO) {
      return this.actoresServicio.actualizar(id, actor);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.actoresServicio.eliminar(id);
    }
}
