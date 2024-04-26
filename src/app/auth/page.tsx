import React from 'react';
import GoogleButton from '@/components/auth/google_button';

const page = () => {
    return (
        <div className='flex flex-1 items-center'>
            <div className=' flex items-end gap-8 rounded-xl bg-white/10 p-8'>
                <div>
                    <h1 className='text-3xl font-semibold text-white'>
                        Sign in
                    </h1>
                    <p className='text-gray-400'>
                        To continue to the app, sign in with Google
                    </p>
                </div>

                <GoogleButton />
            </div>
        </div>
    );
};

export default page;
