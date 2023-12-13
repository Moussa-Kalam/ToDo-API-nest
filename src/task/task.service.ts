import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { db } from 'src/db/database';
import { CreateTaskDto } from './dto/create-task.dto';
import { Status } from './entities/task.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  findAll() {
    return this.taskRepository.findAll();
  }

  async findOne(id: string) {
    try {
      const index = await db.getIndex('/tasks', id);
      if (index < 0) throw new NotFoundException(`Task #${id} is not found`);

      return this.taskRepository.findOne(index);
    } catch (err) {
      throw err;
    }
  }

  create(createTaskDto: CreateTaskDto) {
    const id = uuidv4();

    const newTask = {
      id,
      status: Status.Open,
      ...createTaskDto,
    };
    return this.taskRepository.create(newTask);
  }

  async remove(id: string) {
    try {
      const index = await db.getIndex('/tasks', id);
      if (index < 0) throw new NotFoundException(`Task #${id} not found`);
      return this.taskRepository.remove(index);
    } catch (err) {
      throw err;
    }
  }
}
