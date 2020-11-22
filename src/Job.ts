import { nanoid } from 'nanoid';

export class Job {
  private time = 100; // ms
  private id = nanoid();

  public async execute() {
    await new Promise((resolve) => setTimeout(resolve, this.time));

    console.log(`Job #${this.id} executed on ${Date.now()}`);
  }
}
