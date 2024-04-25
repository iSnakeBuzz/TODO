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

const adminApp =
    getApps().length === 0
        ? initializeApp({
              credential: cert(firebaseAdminConfig as ServiceAccount),
          })
        : getApp;

export { adminApp };
