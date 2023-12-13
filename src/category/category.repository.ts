import { db } from 'src/db/database';
import { Category } from './entities/category.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryRepository {
  async findAll() {
    const categories = await db.getData('/categories');
    return categories;
  }

  async create(newCategory: Category) {
    await db.push('/categories[]', newCategory, true);
    return newCategory;
  }

  async remove(index: number) {
    return await db.delete(`/categories[${index}]`);
  }
}
