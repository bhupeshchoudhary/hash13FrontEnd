// // src/scripts/create-admin.ts
// import { Schema, model, connect, disconnect, Document } from 'mongoose';
// import bcrypt from 'bcryptjs';
// import * as dotenv from 'dotenv';
// import readline from 'readline';

// // Load environment variables
// dotenv.config({ path: '.env.local' });

// type AdminRole = 'admin' | 'super-admin';

// // Define the base interface
// interface IAdmin {
//   email: string;
//   password: string;
//   name: string;
//   role: AdminRole;
// }

// // Define the document interface
// interface IAdminDocument extends IAdmin, Document {
//   createdAt: Date;
//   updatedAt: Date;
//   comparePassword(candidatePassword: string): Promise<boolean>;
//   isModified(path: string): boolean;
// }

// // Create readline interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Promisify readline question
// function question(query: string): Promise<string> {
//   return new Promise((resolve) => {
//     rl.question(query, resolve);
//   });
// }

// // Function to select admin role
// async function selectAdminRole(): Promise<AdminRole> {
//   console.log('\nSelect Admin Role:');
//   console.log('1. Admin (Regular administrative privileges)');
//   console.log('2. Super Admin (Full system access)');
  
//   while (true) {
//     const answer = await question('\nEnter your choice (1 or 2): ');
    
//     switch (answer.trim()) {
//       case '1':
//         return 'admin';
//       case '2':
//         return 'super-admin';
//       default:
//         console.log('Invalid choice. Please enter 1 or 2.');
//     }
//   }
// }

// // Function to input admin name
// async function inputAdminName(): Promise<string> {
//   while (true) {
//     const name = await question('\nEnter admin name: ');
//     if (name.trim().length >= 2) {
//       return name.trim();
//     }
//     console.log('Name must be at least 2 characters long.');
//   }
// }

// // Create the Admin schema
// const AdminSchema = new Schema<IAdminDocument>(
//   {
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//       trim: true,
//       lowercase: true,
//     },
//     password: {
//       type: String,
//       required: [true, 'Password is required'],
//       minlength: [6, 'Password must be at least 6 characters'],
//     },
//     name: {
//       type: String,
//       required: [true, 'Name is required'],
//       trim: true,
//     },
//     role: {
//       type: String,
//       enum: ['admin', 'super-admin'],
//       default: 'admin',
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Add password hashing middleware
// AdminSchema.pre<IAdminDocument>('save', async function (this: IAdminDocument, next) {
//   if (!this.isModified('password')) {
//     return next();
//   }

//   try {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
//   } catch (error) {
//     next(error instanceof Error ? error : new Error('Password hashing failed'));
//   }
// });

// // Add password comparison method
// AdminSchema.methods.comparePassword = async function (
//   this: IAdminDocument,
//   candidatePassword: string
// ): Promise<boolean> {
//   return bcrypt.compare(candidatePassword, this.password);
// };

// // Create the Admin model
// const Admin = model<IAdminDocument>('Admin', AdminSchema);

// async function createAdmin(): Promise<void> {
//   try {
//     // Check environment variables
//     const { MONGODB_URI, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

//     if (!MONGODB_URI) {
//       throw new Error('MONGODB_URI is not defined in environment variables');
//     }

//     if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
//       throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD is not defined in environment variables');
//     }

//     // Connect to MongoDB
//     console.log('Connecting to MongoDB...');
//     await connect(MONGODB_URI);
//     console.log('Connected to MongoDB successfully');

//     // Check if admin exists
//     const existingAdmin = await Admin.findOne({ email: ADMIN_EMAIL });

//     if (existingAdmin) {
//       console.log('Admin user already exists');
//       return;
//     }

//     // Get admin role and name through prompts
//     const role = await selectAdminRole();
//     const name = await inputAdminName();

//     // Create admin user
//     const admin = new Admin({
//       email: ADMIN_EMAIL,
//       password: ADMIN_PASSWORD,
//       name,
//       role,
//     });

//     await admin.save();
    
//     console.log('\nAdmin user created successfully:');
//     console.log('--------------------------------');
//     console.log('Email:', admin.email);
//     console.log('Name:', admin.name);
//     console.log('Role:', admin.role);
//     console.log('Created at:', admin.createdAt);

//   } catch (error) {
//     console.error('Failed to create admin:', error instanceof Error ? error.message : 'Unknown error');
//     throw error;
//   } finally {
//     rl.close();
//     try {
//       await disconnect();
//       console.log('\nDisconnected from MongoDB');
//     } catch (error) {
//       console.error('Error disconnecting:', error instanceof Error ? error.message : 'Unknown error');
//     }
//     process.exit(0);
//   }
// }

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (error: unknown) => {
//   console.error('Unhandled Rejection:', error instanceof Error ? error.message : error);
//   process.exit(1);
// });

// // Run the createAdmin function
// createAdmin().catch((error) => {
//   console.error('Script failed:', error);
//   rl.close();
//   process.exit(1);
// });




import { Schema, model, connect, disconnect, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';
import readline from 'readline';

// Load environment variables
dotenv.config({ path: '.env.local' });

type AdminRole = 'admin' | 'super-admin';

// Define the document interface
interface IAdminDocument extends Document {
  email: string;
  password: string;
  name: string;
  role: AdminRole;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify readline question
function question(query: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

// Function to select admin role
async function selectAdminRole(): Promise<AdminRole> {
  console.log('\nSelect Admin Role:');
  console.log('1. Admin (Regular administrative privileges)');
  console.log('2. Super Admin (Full system access)');
  
  while (true) {
    const answer = await question('\nEnter your choice (1 or 2): ');
    
    switch (answer.trim()) {
      case '1':
        return 'admin';
      case '2':
        return 'super-admin';
      default:
        console.log('Invalid choice. Please enter 1 or 2.');
    }
  }
}

// Function to input admin name
async function inputAdminName(): Promise<string> {
  while (true) {
    const name = await question('\nEnter admin name: ');
    if (name.trim().length >= 2) {
      return name.trim();
    }
    console.log('Name must be at least 2 characters long.');
  }
}

// Create the Admin schema
const AdminSchema = new Schema<IAdminDocument>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [6, 'Password must be at least 6 characters'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    role: {
      type: String,
      enum: ['admin', 'super-admin'],
      default: 'admin',
    },
  },
  {
    timestamps: true, // Ensure timestamps are enabled
  }
);

// Add password hashing middleware
AdminSchema.pre<IAdminDocument>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error instanceof Error ? error : new Error('Password hashing failed'));
  }
});

// Add password comparison method
AdminSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create the Admin model
const Admin = model<IAdminDocument>('Admin', AdminSchema);

async function createAdmin(): Promise<void> {
  try {
    // Check environment variables
    const { MONGODB_URI, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

    if (!MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      throw new Error('ADMIN_EMAIL or ADMIN_PASSWORD is not defined in environment variables');
    }

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully');

    // Check if admin exists
    const existingAdmin = await Admin.findOne({ email: ADMIN_EMAIL });

    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Get admin role and name through prompts
    const role = await selectAdminRole();
    const name = await inputAdminName();

    // Create admin user
    const admin = new Admin({
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      name,
      role,
    });

    await admin.save();
    
    console.log('\nAdmin user created successfully:');
    console.log('--------------------------------');
    console.log('Email:', admin.email);
    console.log('Name:', admin.name);
    console.log('Role:', admin.role);
    console.log('Created at:', admin.createdAt);

  } catch (error) {
    console.error('Failed to create admin:', error instanceof Error ? error.message : 'Unknown error');
    throw error;
  } finally {
    rl.close();
    try {
      await disconnect();
      console.log('\nDisconnected from MongoDB');
    } catch (error) {
      console.error('Error disconnecting:', error instanceof Error ? error.message : 'Unknown error');
    }
    process.exit(0);
  }
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (error: unknown) => {
  console.error('Unhandled Rejection:', error instanceof Error ? error.message : error);
  process.exit(1);
});

// Run the createAdmin function
createAdmin().catch((error) => {
  console.error('Script failed:', error);
  rl.close();
  process.exit(1);
});