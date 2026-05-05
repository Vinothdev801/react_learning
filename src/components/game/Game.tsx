import { useState } from 'react';
import './game.css';



const Square = () => {
    const [value, setValue] = useState<string | null>(null);
    return (
        <>
            <button className="btnStyle" onClick={handleClick}>{value}</button> 
        </>
    );

    function handleClick() {
        setValue('X');
    }
}





export function Board(){
    

    return(
        <div >
            <div >
                <Square />
                <Square />
                <Square/>
            </div>
            <div >
                <Square />
                <Square />
                <Square />
            </div>
            <div>
                <Square />
                <Square />
                <Square />
            </div> 
        </div>
    );
}

