'use client';

import React from 'react';

import Cookies from 'js-cookie';
import { User } from 'firebase/auth';
import { auth } from '@/firebase/client.config';

type AuthContextProps = {
    user: User | null;
};

export const AuthContext = React.createContext<AuthContextProps>({
    user: null,
});

// Update the cookie stid (Session Token ID)
function updateCookie(user: User | null) {
    if (user) {
        user.getIdToken().then((token) => {
            Cookies.set('stid', token, { expires: 7, path: '/' });
        });
    } else {
        Cookies.remove('stid', { path: '/' });
    }
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = React.useState<User | null>(null);

    React.useEffect(() => {
        const unsubAuthStateChanged = auth.onAuthStateChanged((user) => {
            updateCookie(user);
            setUser(user);
        });
        const unSubIdTokenChanged = auth.onIdTokenChanged((user) => {
            updateCookie(user);
            setUser(user);
        });

        return () => {
            unsubAuthStateChanged();
            unSubIdTokenChanged();
        };
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
