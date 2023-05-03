import { useState } from "react";
import './adDesigner.css';


export function AdDesigner(){
const [flavor, setFlavor] = useState('strawberry');
const [colorTheme, setColorTheme] = useState(false);
const [font]

return (
    <div className='adDesigner-container'>
        <h1>Ad Designer</h1>
    <div className='ad'>
    <h3> vote </h3>
    <h2>{flavor}</h2>
    </div>
    </div>
)

}