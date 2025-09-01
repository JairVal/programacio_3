import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';

export class CreateCarteraDto {
  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsEnum(['principiante', 'intermedio', 'avanzado'])
  dificultad: string;

  @IsString()
  tipoHilo: string;

  @IsNumber()
  tiempoEstimado: number; // en horas

  @IsOptional()
  @IsString()
  patron?: string; // URL del patrón
}