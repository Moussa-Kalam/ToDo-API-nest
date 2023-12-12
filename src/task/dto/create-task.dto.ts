import { Status } from '../entities/task.entity';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly title: string;

  readonly status: Status;

  @IsString()
  readonly description: string;
}
