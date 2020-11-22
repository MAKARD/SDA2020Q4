import { Job } from "./Job";
import { Que } from './Que';
import { QueItem } from './QueItem';

export class JobRunner {
  public que: Que<Job>;

  constructor(jobs: Array<{ job: Job, priority: number }>) {
    this.que = new Que(jobs.map(({ job, priority }) => new QueItem(job, priority)));
  }

  public async run() {
    while (this.que.list.length) {
      await this.que.extractBorders({ min: true }).min?.value.execute();
    }
  }
}
