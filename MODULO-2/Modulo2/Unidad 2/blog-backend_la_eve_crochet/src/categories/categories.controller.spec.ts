import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

describe('CategoriesController (Eve Crochet)', () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [
        {
          provide: CategoriesService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Ejemplo de prueba adicional que podrías añadir más adelante
  // it('should return a list of crochet categories', async () => {
  //   const result = [{ id: 1, name: 'Bolsos' }];
  //   jest.spyOn(controller['categoriesService'], 'findAll').mockResolvedValue(result);
  //   expect(await controller.findAll()).toBe(result);
  // });
});
