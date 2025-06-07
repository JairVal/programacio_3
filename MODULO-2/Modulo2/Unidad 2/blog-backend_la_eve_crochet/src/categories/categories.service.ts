import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { paginate, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(dto: CreateCategoryDto): Promise<Category | null> {
    try {
      const category = this.categoryRepo.create(dto);
      return await this.categoryRepo.save(category);
    } catch (err) {
      console.error('Error creating category:', err);
      return null;
    }
  }

  async findAll(options: IPaginationOptions): Promise<Pagination<Category> | null> {
    try {
      const query = this.categoryRepo.createQueryBuilder('category')
        .leftJoinAndSelect('category.posts', 'posts')
        .where('category.is_active = :isActive', { isActive: true })
        .orderBy('category.sort_order', 'ASC')
        .addOrderBy('category.name', 'ASC');
      
      return await paginate<Category>(query, options);
    } catch (err) {
      console.error('Error retrieving categories:', err);
      return null;
    }
  }

  async findAllActive(): Promise<Category[]> {
    try {
      return await this.categoryRepo.find({
        where: { is_active: true },
        relations: ['posts'],
        order: {
          sort_order: 'ASC',
          name: 'ASC'
        }
      });
    } catch (err) {
      console.error('Error retrieving active categories:', err);
      return [];
    }
  }

  async findFeatured(): Promise<Category[]> {
    try {
      return await this.categoryRepo.find({
        where: {
          is_active: true,
          is_featured: true
        },
        relations: ['posts'],
        order: { sort_order: 'ASC' }
      });
    } catch (err) {
      console.error('Error retrieving featured categories:', err);
      return [];
    }
  }

  async findBySlug(slug: string): Promise<Category | null> {
    try {
      return await this.categoryRepo.findOne({
        where: { slug },
        relations: ['posts']
      });
    } catch (err) {
      console.error('Error finding category by slug:', err);
      return null;
    }
  }

  async findOne(id: string): Promise<Category | null> {
    try {
      return await this.categoryRepo.findOne({
        where: { id },
        relations: ['posts']
      });
    } catch (err) {
      console.error('Error finding category:', err);
      return null;
    }
  }

  async findWithPostsCount(): Promise<any[]> {
    try {
      return await this.categoryRepo
        .createQueryBuilder('category')
        .leftJoin('category.posts', 'posts', 'posts.is_published = :published', { published: true })
        .loadRelationCountAndMap('category.postsCount', 'category.posts', 'posts', qb =>
          qb.where('posts.is_published = :published', { published: true })
        )
        .where('category.is_active = :isActive', { isActive: true })
        .orderBy('category.sort_order', 'ASC')
        .getMany();
    } catch (err) {
      console.error('Error getting categories with posts count:', err);
      return [];
    }
  }

  async reorderCategories(categoryIds: string[]): Promise<boolean> {
    try {
      for (let i = 0; i < categoryIds.length; i++) {
        await this.categoryRepo.update(categoryIds[i], { sort_order: i + 1 });
      }
      return true;
    } catch (err) {
      console.error('Error reordering categories:', err);
      return false;
    }
  }

  private async toggleField(id: string, field: 'is_active' | 'is_featured'): Promise<Category | null> {
    try {
      const category = await this.findOne(id);
      if (!category) return null;

      category[field] = !category[field];
      return await this.categoryRepo.save(category);
    } catch (err) {
      console.error(`Error toggling ${field} status:`, err);
      return null;
    }
  }

  async toggleActive(id: string): Promise<Category | null> {
    return this.toggleField(id, 'is_active');
  }

  async toggleFeatured(id: string): Promise<Category | null> {
    return this.toggleField(id, 'is_featured');
  }

  async update(id: string, dto: UpdateCategoryDto): Promise<Category | null> {
    try {
      const category = await this.findOne(id);
      if (!category) return null;

      Object.assign(category, dto);
      return await this.categoryRepo.save(category);
    } catch (err) {
      console.error('Error updating category:', err);
      return null;
    }
  }

  async remove(id: string): Promise<Category | null> {
    try {
      const category = await this.findOne(id);
      if (!category) return null;

      if (category.posts && category.posts.length > 0) {
        throw new Error('Cannot delete category with associated posts');
      }

      return await this.categoryRepo.remove(category);
    } catch (err) {
      console.error('Error deleting category:', err);
      return null;
    }
  }

  async seedDefaultCategories(): Promise<void> {
    try {
      const defaultCategories = [
        {
          name: 'Amigurumi',
          description: 'Muñecos, animales y figuras tejidas a crochet',
          icon: '🧸',
          color: '#FF6B6B',
          sort_order: 1,
          is_featured: true
        },
        {
          name: 'Ropa y Accesorios',
          description: 'Prendas de vestir y complementos tejidos',
          icon: '👕',
          color: '#4ECDC4',
          sort_order: 2,
          is_featured: true
        },
        {
          name: 'Decoración del Hogar',
          description: 'Elementos decorativos para el hogar',
          icon: '🏠',
          color: '#45B7D1',
          sort_order: 3,
          is_featured: true
        },
        {
          name: 'Patrones Gratis',
          description: 'Patrones descargables gratuitos',
          icon: '🆓',
          color: '#96CEB4',
          sort_order: 4,
          is_featured: false
        },
        {
          name: 'Tutoriales Básicos',
          description: 'Guías paso a paso para principiantes',
          icon: '📚',
          color: '#FECA57',
          sort_order: 5,
          is_featured: false
        }
      ];

      for (const categoryData of defaultCategories) {
        const exists = await this.categoryRepo.findOne({
          where: { name: categoryData.name }
        });

        if (!exists) {
          const category = this.categoryRepo.create(categoryData);
          await this.categoryRepo.save(category);
        }
      }
    } catch (err) {
      console.error('Error seeding default categories:', err);
    }
  }
}
