// src/scripts/utils/runner.ts
import dbConnect from '../../lib/mongodb';

export async function runScript(
  name: string,
  fn: () => Promise<void>
): Promise<void> {
  console.log(`Starting script: ${name}`);
  
  try {
    console.log('Connecting to database...');
    await dbConnect();
    console.log('Connected to database');
    
    await fn();
    
    console.log(`Script completed: ${name}`);
    process.exit(0);
  } catch (error) {
    console.error(`Script failed: ${name}`, error);
    process.exit(1);
  }
}