'use client';

import GoogleIcon from '@/components/icons/google';
import { auth, providers } from '@/firebase/client.config';
import useLoadingIcon from '@/hooks/useLoadingIcon';
import { signInWithPopup } from 'firebase/auth';

const GoogleButton = () => {
    const { activeIcon, setLoading } = useLoadingIcon({
        icon: <GoogleIcon width={20} height={20} />,
        size: 20,
        className: 'transition duration-300 group-hover:text-blue-500',
    });

    const onClick = () => {
        setLoading(true);

        signInWithPopup(auth, providers.google)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <button
            onClick={onClick}
            className='group h-12 rounded-full border-2 border-gray-300 px-6 transition duration-300 hover:border-blue-400 '
        >
            <div className='relative flex items-center justify-center space-x-3'>
                {activeIcon}
                <span className='block w-max text-sm font-semibold tracking-wide transition duration-300 active:text-gray-700 group-hover:text-blue-500 sm:text-base'>
                    Continue with Google
                </span>
            </div>
        </button>
    );
};

export default GoogleButton;
