import TodoInput from '@/components/home/todo-input';
import SessionAvatar from '@/components/session/session-avatar';

export default function Home() {
    return (
        <div className='w-full max-w-3xl'>
            <div className='my-6 flex items-center gap-4'>
                <TodoInput />
                <SessionAvatar />
            </div>

            <h1>Hello, world!</h1>
            <p>
                This is a simple Next.js app with Firebase authentication. You
                can sign in with Google using Firebase Auth.
            </p>
        </div>
    );
}
