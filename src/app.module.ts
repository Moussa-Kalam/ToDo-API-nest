import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { TaskController } from './task/task.controller';
import { CategoryService } from './category/category.service';
import { TaskService } from './task/task.service';

@Module({
  imports: [],
  controllers: [AppController, CategoryController, TaskController],
  providers: [AppService, CategoryService, TaskService],
})
export class AppModule {}
