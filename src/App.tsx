import * as React from 'react';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { counterSlice } from './store/counter.slice';
import { userSlice } from './store/user.slice';
import { getUserByUsername } from './store/thunk';

const App = () => {
  const counter = useAppSelector((s) => s.counter);
  const user = useAppSelector((s) => s.user);

  const dispatch = useAppDispatch();

  const increment = () => {
    const action = counterSlice.actions.increment();
    dispatch(action);
  };

  const decrement = () => {
    dispatch(counterSlice.actions.decrement());
  };

  const changeCountry = () => {
    dispatch(userSlice.actions.changeCountry('uk'));
  };

  return (
    <>
      <div className='p-5'>
        <h2>React Redux Learning</h2>
        <hr />
        <p>Counter: {counter}</p>
        <button className='btn btn-primary me-3' onClick={increment}>
          Increment
        </button>
        <button className='btn btn-primary me-3' onClick={decrement}>
          Decrement
        </button>

        <hr />
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <button className='btn btn-primary me-3' onClick={changeCountry}>
          Change Country
        </button>
        <button
          className='btn btn-primary'
          onClick={() => dispatch(getUserByUsername('max.plank'))}
        >
          Load User from API
        </button>
      </div>
    </>
  );
};

export default App;
