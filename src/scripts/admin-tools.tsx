// src/scripts/admin-tools.ts
import * as dotenv from 'dotenv';
import { mongooseClient, mongoOptions } from './db/mongoose-client';
import { Admin, IAdmin } from '../models/admin';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Test database connection
async function testConnection(): Promise<void> {
  try {
    console.log('Testing MongoDB connection...');
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongooseClient.connect(process.env.MONGODB_URI, mongoOptions);
    console.log('Connected successfully to MongoDB');
    
    await mongooseClient.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Connection test failed:', error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Verify admin user
async function verifyAdmin(): Promise<void> {
  try {
    console.log('Connecting to MongoDB...');
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongooseClient.connect(process.env.MONGODB_URI, mongoOptions);
    console.log('Connected to MongoDB');
    
    if (!process.env.ADMIN_EMAIL) {
      throw new Error('ADMIN_EMAIL is not defined');
    }

    const admin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (admin) {
      console.log('\nAdmin user found:');
      console.log('------------------');
      console.log('Email:', admin.email);
      console.log('Name:', admin.name);
      console.log('Role:', admin.role);
      console.log('Created at:', admin.createdAt);
      console.log('Updated at:', admin.updatedAt);
    } else {
      console.log('\nAdmin user not found');
      console.log('Email searched:', process.env.ADMIN_EMAIL);
    }

  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
  } finally {
    await mongooseClient.disconnect();
    console.log('\nDisconnected from MongoDB');
  }
}

// Create admin user
async function createAdmin(): Promise<void> {
  try {
    console.log('Connecting to MongoDB...');
    
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }

    await mongooseClient.connect(process.env.MONGODB_URI, mongoOptions);
    console.log('Connected to MongoDB');
    
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD is not defined');
    }

    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    const admin = await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      name: 'Admin User',
      role: 'super-admin'
    });

    console.log('Admin user created successfully:', admin.email);

  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
  } finally {
    await mongooseClient.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

// Handle command line arguments
const command = process.argv[2];

async function main() {
  try {
    switch (command) {
      case 'test':
        await testConnection();
        break;
      case 'verify':
        await verifyAdmin();
        break;
      case 'create':
        await createAdmin();
        break;
      default:
        console.log('Please specify a command: test, verify, or create');
        process.exit(1);
    }
  } catch (error) {
    console.error('Script failed:', error);
    process.exit(1);
  }
  process.exit(0);
}

// Run the script
main().catch(console.error);