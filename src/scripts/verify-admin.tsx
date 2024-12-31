// src/scripts/verify-admin.ts
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

// Define the Admin Schema (since we need it to query)
const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  role: String,
}, {
  timestamps: true
});

async function verifyAdmin() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
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
    }

    await mongoose.disconnect();
    console.log('\nDisconnected from MongoDB');
  } catch (error) {
    console.error('Error:', error);
    try {
      await mongoose.disconnect();
    } catch (disconnectError) {
      console.error('Error disconnecting:', disconnectError);
    }
  } finally {
    process.exit(0);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1);
});

verifyAdmin();