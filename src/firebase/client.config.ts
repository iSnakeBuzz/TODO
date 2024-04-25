/**
 * Firebase client configuration, used to initialize the Firebase app and auth
 */

import { getApp, getApps, initializeApp } from 'firebase/app';
import { env } from '@/env';
import {
    GoogleAuthProvider,
    connectAuthEmulator,
    getAuth,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// App initialization
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// Connect to dev server if in emulator mode
if (env.NEXT_PUBLIC_ENV == 'development') {
    connectAuthEmulator(auth, `http://${env.NEXT_PUBLIC_EMULATOR_AUTH_PATH}`);
}

// Providers
const providers = {
    google: new GoogleAuthProvider(),
};

export { auth, app, providers };
