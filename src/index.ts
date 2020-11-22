import uniqueRandom from 'unique-random';

import { Job } from './Job';
import { JobRunner } from './JobRunner';

const createJobs = (count: number) => {
  const random = uniqueRandom(0, count + 1);

  return new Array(count).fill({}).map(() => ({
    job: new Job(),
    priority: random()
  }));
}

const run = async () => {
  const runner = new JobRunner(createJobs(10000));

  console.log(`Job runner started at ${Date.now()}`);
  await runner.run();
  console.log(`Job runner stopped at ${Date.now()}`);
}

run();
