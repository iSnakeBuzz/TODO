import {
    initializeApp,
    getApps,
    getApp,
    cert,
    ServiceAccount,
} from 'firebase-admin/app';
import { env } from '@/env';

const firebaseAdminConfig = {
    privateKey: env.FIREBASE_ADMIN_PRIVATE_KEY,
    clientEmail: env.FIREBASE_ADMIN_CLIENT_EMAIL,
    projectId: env.FIREBASE_ADMIN_PROJECT_ID,
};

if (env.NODE_ENV === 'development') {
    process.env['FIRESTORE_EMULATOR_HOST'] =
        env.NEXT_PUBLIC_EMULATOR_FIRESTORE_PATH;
    process.env['FIREBASE_AUTH_EMULATOR_HOST'] =
        env.NEXT_PUBLIC_EMULATOR_AUTH_PATH;
}

const adminApp =
    getApps().length === 0
        ? initializeApp({
              credential: cert(firebaseAdminConfig as ServiceAccount),
          })
        : getApp;

export { adminApp };
