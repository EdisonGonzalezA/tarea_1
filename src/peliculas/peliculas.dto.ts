import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class PeliculaDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    titulo: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    genero: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    anio: Date;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString()
    director: string;
  }