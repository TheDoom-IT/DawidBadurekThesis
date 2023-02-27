import { useEffect, useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { readFile } from '../utils/read-file';

export const LoadFilePopup = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFile = async () => {
        if (!inputRef.current) {
            return;
        }

        if (inputRef.current.files === null || inputRef.current.files.length === 0) {
            return;
        }
        const file = inputRef.current.files[0];

        const fileResult = await readFile(file);
        console.log(fileResult);
    };

    return (
        <Popup modal trigger={<button>Open</button>} position={'center center'}>
            <div>Popup</div>
            <input ref={inputRef} type="file" accept="application/JSON"></input>
            <button onClick={handleFile}>Load</button>
        </Popup>
    );
};
