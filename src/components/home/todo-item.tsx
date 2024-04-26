'use client';

import { Draggable } from '@hello-pangea/dnd';
import { GripIcon, GripVerticalIcon } from 'lucide-react';

type TodoItemProps = {
    id: string;
    index: number;
    title: string;
    description: string;
    onToggle?: () => void;
};

const TodoItem = ({
    id,
    index,
    title,
    description,
    onToggle,
}: TodoItemProps) => {
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    className='my-2 flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-lg backdrop-brightness-50 backdrop-saturate-150'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div {...provided.dragHandleProps}>
                        <GripIcon className='text-white/50' />
                    </div>
                    <div>
                        <div className='font-semibold'>{title}</div>
                        <div className='text-xs text-white/60'>
                            {description}
                        </div>
                    </div>
                    <div className='ml-auto'>
                        <button>toggle</button>
                    </div>
                </div>
            )}
        </Draggable>
    );
};

export default TodoItem;
