import React, {useState} from 'react';
import * as classes from './Counter.module.scss';

export const Counter = () => {
    const [count, serCount] = useState(0);

    const increment = () => {
        serCount(count  + 2)
    }
    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
        </div>
    );
};

export default Counter;
