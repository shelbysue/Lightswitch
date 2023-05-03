import { useState } from 'react';


export function Counter(){

    const [count, setCount] = useState(0);

    return (
        <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>add</button>
        </div>
    )
}