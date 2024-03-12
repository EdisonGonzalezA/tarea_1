import {
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';
  
  export class ActorDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    nombre: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString()
    edad: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString()
    genero: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString()
    nacionalidad: string;
  }