import { Injectable } from '@nestjs/common';
import { IPelicula } from './peliculas.interface';
import { v4 as uuidV4 } from 'uuid';
import { PeliculaDTO } from './peliculas.dto';


@Injectable()
export class PeliculasService {
    peliculas: IPelicula[] = [];
  todos() {
    return this.peliculas;
  }
  uno(id: string) {
    return this.peliculas.find((pelicula) => pelicula.id == id);
  }
  insertar(pelicula: PeliculaDTO) {
    const peli = {
      id: uuidV4(),
      ...pelicula,
    };
    this.peliculas.push(peli);
    return this.peliculas;
  }
  actualizar(id: string, peliculaActualziar: PeliculaDTO) {
    const nuevopeli = { id, ...peliculaActualziar };
    this.peliculas = this.peliculas.map((pelicula) =>
      pelicula.id === id ? nuevopeli : pelicula,
    );
    return nuevopeli;
  }
  eliminar(id: string) {
    this.peliculas = this.peliculas.filter((pelicula) => pelicula.id !== id);
    return 'pelicula Eliminada';
  }
}
