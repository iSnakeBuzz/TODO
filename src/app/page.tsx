import TodoInput from '@/components/home/todo-input';
import SessionAvatar from '@/components/session/session-avatar';
import TodoList from '@/components/home/todo-list';

export default function Home() {
    return (
        <div className='flex w-full max-w-3xl flex-1 flex-col'>
            <div className='sticky top-0 z-40 flex items-center gap-4 py-6'>
                <TodoInput />
                <SessionAvatar />
            </div>

            <TodoList />
        </div>
    );
}
