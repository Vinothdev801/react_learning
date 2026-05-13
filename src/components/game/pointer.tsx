import { useEffect, useState } from "react";



export const Pointer = function() {
    const [position, setPosition] = useState({x: 0, y: 0});

    useEffect(() => {
        function handlePointerMove(e: any) {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('pointermove', handlePointerMove);
        console.log('Event listener added....')

        return () => {
            console.log("Event listener removed....")
            window.removeEventListener('pointermove', handlePointerMove);
        }
    }, []);

    return (
        <div style={{
            position: 'absolute',
            backgroundColor: 'rgb(204, 204, 204)',
            borderRadius: '50%',
            opacity: 0.6,
            transform: `translate(${position.x}px, ${position.y}px)`,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: 40,
            height: 40,
        }}/>
    );
}