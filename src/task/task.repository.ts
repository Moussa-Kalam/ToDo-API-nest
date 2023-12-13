import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entity';
import { db } from 'src/db/database';

@Injectable()
export class TaskRepository {
  async findAll() {
    const tasks = await db.getData('/tasks');
    return tasks;
  }

  async findOne(index: number) {
    return await db.getData(`/tasks[${index}]`);
  }

  async create(newTask: Task) {
    await db.push(`/tasks[]`, newTask, true);
    return newTask;
  }

  async remove(index: number) {
    return await db.delete(`/tasks[${index}]`);
  }
}
