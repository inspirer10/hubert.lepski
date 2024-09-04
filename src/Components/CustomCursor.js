import React, { useEffect, useState } from 'react';
import { useCursor } from './CursorContext';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const { isDark } = useCursor();

    useEffect(() => {
        const updateMousePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        document.addEventListener('mousemove', updateMousePosition);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <>
            <div
                id='cursor'
                className={isDark ? 'dark' : ''}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
            <div
                id='aura'
                className={isDark ? 'dark' : ''}
                style={{ left: `${position.x}px`, top: `${position.y}px` }}
            />
        </>
    );
};

export default CustomCursor;
