import './App.css';
import {User} from "./components/User";

function Form() {
  return null;
}

function TodoItem() {
  return null;
}

function Posts() {
  return null;
}

function App() {
  return (
      <div className='min-h-screen h-full w-screen bg-indigo-400'>
        <div className='container mx-auto px-4'>
          <header className='flex gap-20 '>
            <div className='w-1/3'>
              <h1 className='font-bold my-5'>Redux Toolkit State Change</h1>
              <User />
            </div>
            <div className='w-1/3'>
              <h1 className='font-bold my-5'>Redux Toolkit Todo App</h1>
              <Form />
              <TodoItem />
            </div>
            <div className='w-1/3'>
              <h1 className='font-bold my-5'>Redux Toolkit Async Thunk</h1>
              <Posts />
            </div>
          </header>
        </div>
      </div>
  )
}

export default App;
