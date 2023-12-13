import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';
import { db } from 'src/db/database';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  findAll() {
    return this.categoryRepository.findAll();
  }

  async create(createCategoryDto: CreateCategoryDto) {
    const id = uuidv4();
    const newCategory = {
      id,
      ...createCategoryDto,
    };

    return this.categoryRepository.create(newCategory);
  }

  async remove(id: string) {
    try {
      const index = await db.getIndex('/categories', id);
      if (index < 0) throw new NotFoundException(`Category #${id} not found`);
      return this.categoryRepository.remove(index);
    } catch (err) {
      throw err;
    }
  }
}
