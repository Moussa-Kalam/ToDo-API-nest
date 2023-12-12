import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoryController {
  @Get()
  findAll() {
    return 'This action returns all the categories';
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action deletes the category #${id}`;
  }
}
