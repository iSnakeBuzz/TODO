'use client';

import React, { useTransition } from 'react';
import {
    DragDropContext,
    DropResult,
    Droppable,
    ResponderProvided,
} from '@hello-pangea/dnd';
import { cn } from '@/lib/utils';

import TodoItem from './todo-item';

const initialData = [
    { id: '1', title: 'asdasd', description: 'asd' },
    { id: '2', title: 'asdasd 2', description: 'asd' },
    { id: '3', title: 'asdasd 3', description: 'asd' },
    { id: '4', title: 'asdasd 4', description: 'asd' },
    { id: '5', title: 'asdasd 5', description: 'asd' },
    { id: '6', title: 'asdasd 6', description: 'asd' },
    { id: '7', title: 'asdasd 7', description: 'asd' },
    { id: '8', title: 'asdasd 8', description: 'asd' },
    { id: '9', title: 'asdasd 9', description: 'asd' },
    { id: '10', title: 'asdasd 10', description: 'asd' },
    { id: '11', title: 'asdasd 11', description: 'asd' },
    { id: '12', title: 'asdasd 12', description: 'asd' },
    { id: '13', title: 'asdasd 13', description: 'asd' },
    { id: '14', title: 'asdasd 14', description: 'asd' },
];

const TodoList = () => {
    const [isPending, startTransition] = useTransition();
    const [items, updateOptimistic] = React.useOptimistic(
        initialData,
        (state, { source_index, destination_index }) => {
            const result = Array.from(state);
            const [removed] = result.splice(source_index, 1);
            result.splice(destination_index, 0, removed);

            console.log('result', result);

            return result;
        },
    );

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const { source, destination } = result;

        const source_index = source.index;
        const destination_index = destination.index;

        startTransition(() => {
            updateOptimistic({ source_index, destination_index });
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId='todo-list'>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        className={cn('grid')}
                        {...provided.droppableProps}
                    >
                        {items.map((item, index) => (
                            <TodoItem key={item.id} index={index} {...item} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default TodoList;
