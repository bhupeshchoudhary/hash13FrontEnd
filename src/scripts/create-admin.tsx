



// src/scripts/create-admin.ts
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

// Define interfaces
interface IAdmin {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'super-admin';
  createdAt?: Date;
  updatedAt?: Date;
}

interface IAdminMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

type AdminModel = mongoose.Model<IAdmin, {}, IAdminMethods>;

// Create the schema
const AdminSchema = new mongoose.Schema<IAdmin, AdminModel, IAdminMethods>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'super-admin'],
    default: 'admin',
  },
}, {
  timestamps: true,
});

// Add password hashing middleware
AdminSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error instanceof Error ? error : new Error('Password hashing failed'));
  }
});

// Add password comparison method
AdminSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create the model
const Admin = (mongoose.models.Admin as AdminModel) || mongoose.model<IAdmin, AdminModel>('Admin', AdminSchema);

async function createAdmin(): Promise<void> {
  try {
    // Check environment variables
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined');
    }
    if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
      throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD is not defined');
    }

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin exists
    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0);
    }

    // Create admin user
    const adminData: IAdmin = {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      name: 'Admin User',
      role: 'super-admin'
    };

    const admin = await Admin.create(adminData);
    console.log('Admin user created successfully:', admin.email);
    
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Failed to create admin:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error: unknown) => {
  console.error('Unhandled Rejection:', error instanceof Error ? error.message : error);
  process.exit(1);
});

createAdmin();