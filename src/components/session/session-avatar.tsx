'use client';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import useAuth from '@/hooks/use-auth';

const SessionAvatar = () => {
    const { user } = useAuth();

    return (
        <div className='flex items-center rounded-full bg-black p-0.5 ring-2 ring-orange-500/50'>
            <Avatar>
                <AvatarImage src={user?.photoURL ?? ''} />
                <AvatarFallback className='bg-blue-900 text-xs font-semibold'>
                    {user?.displayName
                        ?.split(' ')
                        .map((name) => name[0])
                        .join('')}
                </AvatarFallback>
            </Avatar>
        </div>
    );
};

export default SessionAvatar;
