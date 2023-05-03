import './Switch.css';
import { useState } from 'react';

function Switch(){

    const [light, setLight] = useState('on');

    return (
        <div className={light ==='on' ? 'blue' : 'switch'}>
        <h2>switch</h2>
        <h1>{light}</h1>
        <button onClick={() => setLight('on')}>on</button>
        <button onClick={() => setLight('off')}>off</button>
        </div>
    );
}

export default Switch; 