// src/utils/env.ts
type EnvVar = Exclude<keyof NodeJS.ProcessEnv, 'NODE_ENV'>

function getRequiredEnvVar(key: EnvVar): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Required environment variable ${key} is not defined`)
  }
  return value
}

export const env = {
  // Auth
  jwtSecret: () => getRequiredEnvVar('JWT_SECRET'),
  
  // Database
  mongoDbUri: () => getRequiredEnvVar('MONGODB_URI'),
  
  // Admin
  adminEmail: () => getRequiredEnvVar('ADMIN_EMAIL'),
  adminPassword: () => getRequiredEnvVar('ADMIN_PASSWORD'),
  
  // Environment helpers
  isProduction: () => process.env.NODE_ENV === 'production',
  isDevelopment: () => process.env.NODE_ENV === 'development',
  isTest: () => process.env.NODE_ENV === 'test',
} as const