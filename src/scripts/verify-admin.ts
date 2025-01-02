// // src/scripts/verify-admin.ts
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config({ path: '.env.local' });

// // Define the Admin Schema (since we need it to query)
// const AdminSchema = new mongoose.Schema({
//   email: String,
//   password: String,
//   name: String,
//   role: String,
// }, {
//   timestamps: true
// });

// async function verifyAdmin() {
//   try {
//     console.log('Connecting to MongoDB...');
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');

//     const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
//     const admin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    
//     if (admin) {
//       console.log('\nAdmin user found:');
//       console.log('------------------');
//       console.log('Email:', admin.email);
//       console.log('Name:', admin.name);
//       console.log('Role:', admin.role);
//       console.log('Created at:', admin.createdAt);
//       console.log('Updated at:', admin.updatedAt);
//     } else {
//       console.log('\nAdmin user not found');
//     }

//     await mongoose.disconnect();
//     console.log('\nDisconnected from MongoDB');
//   } catch (error) {
//     console.error('Error:', error);
//     try {
//       await mongoose.disconnect();
//     } catch (disconnectError) {
//       console.error('Error disconnecting:', disconnectError);
//     }
//   } finally {
//     process.exit(0);
//   }
// }

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (error) => {
//   console.error('Unhandled Rejection:', error);
//   process.exit(1);
// });

// verifyAdmin();









// src/scripts/verify-admin.ts
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

// Define types for mongoose
type MongooseDocument = {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define interfaces
interface IAdmin extends MongooseDocument {
  email: string;
  password: string;
  name: string;
  role: string;
}

// Define the Admin Schema
const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  role: String,
}, {
  timestamps: true
});

async function verifyAdmin(): Promise<void> {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
    
    // Find all admins
    const admins: IAdmin[] = await Admin.find({}).sort({ createdAt: 'asc' });
    
    if (admins.length > 0) {
      console.log('\nFound', admins.length, 'admin user(s):');
      console.log('----------------------------------------');
      
      admins.forEach((admin: IAdmin, index: number) => {
        console.log(`\nAdmin #${index + 1}:`);
        console.log('------------------');
        console.log('Email:', admin.email);
        console.log('Name:', admin.name);
        console.log('Role:', admin.role);
        console.log('Created at:', admin.createdAt);
        console.log('Updated at:', admin.updatedAt);
        console.log('------------------');
      });

      // Display summary
      const roleCount: { [key: string]: number } = admins.reduce((acc, admin) => {
        acc[admin.role] = (acc[admin.role] || 0) + 1;
        return acc;
      }, {} as { [key: string]: number });

      console.log('\nSummary:');
      console.log('----------------------------------------');
      console.log('Total admins:', admins.length);
      Object.entries(roleCount).forEach(([role, count]) => {
        console.log(`${role}:`, count);
      });
      
    } else {
      console.log('\nNo admin users found in the database');
    }

    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    try {
      await mongoose.disconnect();
    } catch (disconnectError) {
      console.error('Error disconnecting:', 
        disconnectError instanceof Error ? disconnectError.message : 'Unknown error'
      );
    }
  } finally {
    process.exit(0);
  }
}

async function verifyAdminByEmail(searchEmail: string): Promise<void> {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
    const admin: IAdmin | null = await Admin.findOne({ email: searchEmail });
    
    if (admin) {
      console.log('\nFound admin user:');
      console.log('------------------');
      console.log('Email:', admin.email);
      console.log('Name:', admin.name);
      console.log('Role:', admin.role);
      console.log('Created at:', admin.createdAt);
      console.log('Updated at:', admin.updatedAt);
    } else {
      console.log(`\nNo admin user found with email: ${searchEmail}`);
    }

    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error instanceof Error ? error.message : 'Unknown error');
    try {
      await mongoose.disconnect();
    } catch (disconnectError) {
      console.error('Error disconnecting:', 
        disconnectError instanceof Error ? disconnectError.message : 'Unknown error'
      );
    }
  } finally {
    process.exit(0);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error: unknown) => {
  console.error('Unhandled Rejection:', error instanceof Error ? error.message : error);
  process.exit(1);
});

// Add command line arguments support
const args = process.argv.slice(2);
const email = args.find(arg => arg.startsWith('--email='))?.split('=')[1];

if (email) {
  // If email is provided, search for specific admin
  verifyAdminByEmail(email);
} else {
  // Otherwise, show all admins
  verifyAdmin();
}