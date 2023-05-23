import React, { useRef, useState } from 'react';
import { File, fileSchema } from '../schemas/file-schema';
import { readFile } from '../utils/read-file';
import exemplaryDataFile from '../static/exemplary-data.json';
import '../styles/app/load-file-menu.css';
import { FileLoadingFailedException } from '../exceptions/file-loading-failed-exception';

export interface LoadFileMenuProps {
    setFile: (file: File) => void;
}

export const LoadFileMenu = ({ setFile }: LoadFileMenuProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadExemplaryFile = () => {
        const file = fileSchema.parse(exemplaryDataFile);
        setFile(file);
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
            throw new FileLoadingFailedException('Failed to parse a JSON file.');
        }
    };

    const validateInputFile = (fileAsJson: any): File => {
        try {
            return fileSchema.parse(fileAsJson);
        } catch (e) {
            console.error(e);
            throw new FileLoadingFailedException(
                `Cannot read a file. It has an unsupported format (check the console for more information).`,
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
                throw new FileLoadingFailedException('Failed to load a file.');
            }

            const fileAsJson = parseJson(fileResult.toString());
            const validatedFile = validateInputFile(fileAsJson);
            setFile(validatedFile);
        } catch (e) {
            if (e instanceof FileLoadingFailedException) {
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
