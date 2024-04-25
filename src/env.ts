import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        NODE_ENV: z.enum(['production', 'development']),
        FIREBASE_ADMIN_PRIVATE_KEY: z.string(),
        FIREBASE_ADMIN_CLIENT_EMAIL: z.string(),
        FIREBASE_ADMIN_PROJECT_ID: z.string(),
    },
    client: {
        NEXT_PUBLIC_ENV: z.enum(['development', 'production']),
        NEXT_PUBLIC_FIREBASE_API_KEY: z.string(),
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: z.string(),
        NEXT_PUBLIC_FIREBASE_PROJECT_ID: z.string(),
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: z.string(),
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: z.string(),
        NEXT_PUBLIC_FIREBASE_APP_ID: z.string(),
        NEXT_PUBLIC_EMULATOR_FIRESTORE_PATH: z.string().optional(),
        NEXT_PUBLIC_EMULATOR_AUTH_PATH: z.string().optional(),
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
        NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
            process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        NEXT_PUBLIC_FIREBASE_PROJECT_ID:
            process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET:
            process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID:
            process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
        NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
        NEXT_PUBLIC_EMULATOR_FIRESTORE_PATH:
            process.env.NEXT_PUBLIC_EMULATOR_FIRESTORE_PATH,
        NEXT_PUBLIC_EMULATOR_AUTH_PATH:
            process.env.NEXT_PUBLIC_EMULATOR_AUTH_PATH,
    },
});
