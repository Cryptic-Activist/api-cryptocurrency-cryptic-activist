import { exit } from 'process';

// import requiredEnv from '../../../envs.json';
import { warning } from '@/utils/logger/logger';

function checkEnv(envName: string): void {
  if (!process.env[envName]) {
    warning(`${envName} environment variable is missing`);
    exit(1);
  }
}

export function checkEnvironmentVariable(): void {
  // requiredEnv.forEach((envName) => {
  //   checkEnv(envName);
  // });
}
