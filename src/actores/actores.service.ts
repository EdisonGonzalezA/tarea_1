import { Injectable } from '@nestjs/common';
import { ActorDTO } from './actores.dto';
import { IActor } from './actores.interface';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class ActoresService {
    actores: IActor[] = [];
  todos() {
    return this.actores;
  }
  uno(id: string) {
    return this.actores.find((actor) => actor.id == id);
  }
  insertar(actor: ActorDTO) {
    const act = {
      id: uuidV4(),
      ...actor,
    };
    this.actores.push(act);
    return this.actores;
  }
  actualizar(id: string, actorActualziar: ActorDTO) {
    const nuevoact = { id, ...actorActualziar };
    this.actores = this.actores.map((actor) =>
      actor.id === id ? nuevoact : actor,
    );
    return nuevoact;
  }
  eliminar(id: string) {
    this.actores = this.actores.filter((actor) => actor.id !== id);
    return 'actor Eliminado';
  }
}
