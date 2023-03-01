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
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadExemplaryFile = () => {
        const tracks = tracksSchema.parse(trackFiles[1]);
        setTracks(tracks);
    };

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isFileChosen = e.target.value !== '';
        setButtonEnabled(isFileChosen);
        setError(null);
    };

    const parseJson = (fileString: string) => {
        try {
            return JSON.parse(fileString);
        } catch {
            throw new Error('Failed to parse a JSON file.');
        }
    };

    const validateInputFile = (fileAsJson: any): Tracks => {
        try {
            return tracksSchema.parse(fileAsJson);
        } catch (e) {
            console.error(e);
            throw new Error(
                `Cannot read a file. It has an unsupported format(check the console for more information).`,
            );
        }
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
                throw new Error('Failed to load a file.');
            }

            const fileAsJson = parseJson(fileResult.toString());
            const tracks = validateInputFile(fileAsJson);
            setTracks(tracks);
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('Unexpected error occured.');
            }
        }

        setLoading(false);
    };

    return (
        <div id="LoadFileMenu" className="box">
            <h3 className="text-center">Choose a file</h3>
            <div className="hline"></div>
            <div className="file-form">
                <input
                    onChange={onFileChange}
                    ref={inputRef}
                    type="file"
                    accept="application/JSON"></input>
                <button onClick={handleFile} disabled={loading || !buttonEnabled}>
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
