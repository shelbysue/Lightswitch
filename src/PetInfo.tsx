import './Switch.css';
import { useState } from 'react';
import { Pet } from './Pet';

 export function PetInfo(){

    const [pet, setPet] = useState({name: 'bingo', breed: 'golden'});

    return (
        <div>
            {pet.name} is a {pet.breed}
        </div>
    )
}

