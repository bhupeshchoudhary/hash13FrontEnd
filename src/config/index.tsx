// src/config/index.ts
import { env } from '../../utils/env'

export const config = {
  jwt: {
    secret: env.jwtSecret(),
    expiresIn: '1d',
  },
  
  mongodb: {
    uri: env.mongoDbUri(),
    options: {
      bufferCommands: false,
      autoIndex: !env.isProduction(),
    },
  },
  
  admin: {
    email: env.adminEmail(),
    password: env.adminPassword(),
  },
  
  cookies: {
    secure: env.isProduction(),
    sameSite: 'lax' as const,
    maxAge: 86400, // 1 day
  },
} as const

export type Config = typeof config