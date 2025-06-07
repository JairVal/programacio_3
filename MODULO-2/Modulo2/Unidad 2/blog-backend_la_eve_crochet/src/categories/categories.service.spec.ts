import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let repository: jest.Mocked<Repository<Category>>;

  beforeEach(async () => {
    const mockRepository = {
      create: jest.fn(),
      save: jest.fn(),
      find: jest.fn(),
      findOneBy: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesService,
        {
          provide: getRepositoryToken(Category),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
    repository = module.get(getRepositoryToken(Category));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Ejemplo de test que puedes usar más adelante:
  // it('should create a new category', async () => {
  //   const dto = { name: 'Bolsos' };
  //   const savedCategory = { id: 1, name: 'Bolsos' };
  //   repository.create.mockReturnValue(savedCategory);
  //   repository.save.mockResolvedValue(savedCategory);

  //   const result = await service.create(dto);
  //   expect(result).toEqual(savedCategory);
  //   expect(repository.create).toHaveBeenCalledWith(dto);
  //   expect(repository.save).toHaveBeenCalledWith(savedCategory);
  // });
});
