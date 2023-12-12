import { Injectable, NotFoundException } from '@nestjs/common';
import { Status } from './entities/task.entity';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: '1',
      title: 'Build the backend of my application',
      status: Status.Open,
      description:
        'Draw the database and build the backend of the application using Nest.js',
    },
    {
      id: '2',
      title: 'Build the frontend of my application',
      status: Status.Open,
      description:
        'Come up with a design using Figma and build the frontend of the application using React.js',
    },
  ];

  findAll() {
    return this.tasks;
  }

  findOne(id: string) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task #${id} not found`);
    }
    return task;
  }

  create(createTaskDto: any) {
    this.tasks.push(createTaskDto);
  }

  remove(id: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);

    if (taskIndex < 0) throw new NotFoundException(`Task #${id} not found`);

    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);
    }
  }
}
