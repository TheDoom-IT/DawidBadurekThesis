import { useRef, useState } from 'react';
import { Tracks, tracksSchema } from '../schemas/tracks-schema';
import { readFile } from '../utils/read-file';
import tracks1 from '../static/tracks1647477806262.json';
import tracks2 from '../static/tracks1647635306347.json';
import '../styles/app/load-file-menu.css';

const trackFiles = [tracks1, tracks2];

export interface LoadFileMenuProps {
    setTracks: (tracks: Tracks) => void;
}

export const LoadFileMenu = ({ setTracks }: LoadFileMenuProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadExemplaryFile = () => {
        const tracks = tracksSchema.parse(trackFiles[1]);
        setTracks(tracks);
    };

    const handleError = () => {
        setError('Failed to load a file.');
    };

    const handleFile = async () => {
        if (!inputRef.current) {
            return;
        }

        if (inputRef.current.files === null || inputRef.current.files.length === 0) {
            return;
        }

        setLoading(true);

        const file = inputRef.current.files[0];

        try {
            const fileResult = await readFile(file);
            if (fileResult === null) {
                handleError();
                setLoading(false);
                return;
            }

            const fileAsJson = JSON.parse(fileResult.toString());
            const tracks = tracksSchema.parse(fileAsJson);
            setTracks(tracks);
        } catch {
            handleError();
        }

        setLoading(false);
    };

    return (
        <div id="LoadFileMenu" className="box">
            <h3 className="text-center">Choose a file</h3>
            <div className="hline"></div>
            <div className="file-form">
                <input ref={inputRef} type="file" accept="application/JSON"></input>
                <button onClick={handleFile} disabled={loading}>
                    Load
                </button>
                <div className="hline"></div>
                <button onClick={loadExemplaryFile}>Load exemplary file</button>
            </div>
            <div className="hline"></div>
            {error && <p className="error text-center">{error}</p>}
        </div>
    );
};
