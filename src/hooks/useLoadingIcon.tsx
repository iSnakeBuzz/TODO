'use client';
import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = {
    icon: React.ReactNode;
    className?: string;
    size?: number;
};

const useLoadingIcon = ({ icon, size = 24, className }: Props) => {
    const [loading, setLoading] = React.useState(false);
    const activeIcon = loading ? (
        <Loader2Icon
            className={cn('animate-spin', className)}
            strokeWidth={2.5}
            size={size}
        />
    ) : (
        icon
    );

    return {
        loading,
        setLoading,
        activeIcon,
    };
};

export default useLoadingIcon;
