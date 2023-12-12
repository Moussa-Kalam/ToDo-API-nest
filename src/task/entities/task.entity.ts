export enum Status {
  Open = 'OPEN',
  InProgress = 'IN_PROGRESS',
  Done = 'DONE',
}

export class Task {
  id: string;
  title: string;
  status: Status;
  description: string;
}
