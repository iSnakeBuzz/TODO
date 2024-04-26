'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

const TodoInput = () => {
    const [focus, setFocus] = useState(false);

    return (
        <div
            className={cn(
                'w-full rounded-full bg-white/10 transition-all duration-200',
                {
                    'ring-2 ring-offset-blue-500': focus,
                },
            )}
        >
            <input
                type='text'
                placeholder='Type a todo'
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className='w-full bg-transparent px-5 py-3 outline-none'
            />
        </div>
    );
};

export default TodoInput;
