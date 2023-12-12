import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  private categories: Category[] = [
    {
      id: 'fake-id',
      name: 'Coding',
    },
  ];

  findAll() {
    return this.categories;
  }

  create(createCategoryDto: any) {
    this.categories.push(createCategoryDto);
  }

  remove(id: string) {
    const categoryIndex = this.categories.findIndex(
      (category) => category.id === id,
    );

    if (categoryIndex < 0)
      throw new NotFoundException(`Category #${id} not found`);

    if (categoryIndex >= 0) {
      this.categories.splice(categoryIndex, 1);
    }
  }
}
