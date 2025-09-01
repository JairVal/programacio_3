import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../categories/category.entity';

export enum DifficultyLevel {
  PRINCIPIANTE = 'principiante',
  INTERMEDIO = 'intermedio', 
  AVANZADO = 'avanzado'
}

export enum ProjectType {
  AMIGURUMI = 'amigurumi',
  ROPA = 'ropa',
  ACCESORIOS = 'accesorios',
  DECORACION = 'decoracion',
  TUTORIAL = 'tutorial'
}

@Entity('posts')
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column('text')
    content: string;

    @Column({ nullable: true })
    description: string; // Breve descripción para SEO y preview

    @Column({ nullable: true })
    featured_image: string; // Imagen principal del proyecto

    // Campos específicos de crochet
    @Column({
        type: 'enum',
        enum: DifficultyLevel,
        default: DifficultyLevel.PRINCIPIANTE
    })
    difficulty: DifficultyLevel;

    @Column({
        type: 'enum',
        enum: ProjectType,
        nullable: true
    })
    project_type: ProjectType;

    @Column('simple-array', { nullable: true })
    materials: string[]; // ['Hilo algodón', 'Ganchillo 3.5mm', 'Relleno']

    @Column({ nullable: true })
    hook_size: string; // '3.5mm', '4mm', etc.

    @Column({ nullable: true })
    estimated_time: string; // '2-3 horas', '1 semana', etc.

    @Column('simple-array', { nullable: true })
    techniques: string[]; // ['punto bajo', 'punto alto', 'aumentos']

    @Column('simple-array', { nullable: true })
    tags: string[]; // ['gratis', 'fácil', 'bebé', 'navidad']

    @Column('simple-array', { nullable: true })
    images: string[]; // Array de URLs de imágenes del proceso

    @Column({ default: false })
    is_featured: boolean; // Para destacar posts principales

    @Column({ default: true })
    is_published: boolean; // Para drafts

    @Column({ default: false })
    is_free_pattern: boolean; // Si el patrón es gratuito

    @Column({ nullable: true })
    pattern_file_url: string; // URL del archivo PDF del patrón

    @Column({ default: 0 })
    views: number; // Contador de vistas

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Category, { eager: true })
    category: Category;

    // Virtual field para URL amigable
    get slug(): string {
        return this.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '');
    }
}