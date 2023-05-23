import { useRef } from 'react';

interface TracksRangeProps {
    min: number;
    max: number;
    defaultValue: number;
    setTrackId: (val: number) => void;
}

export const TracksRange = (props: TracksRangeProps) => {
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    // Add debounce
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            const id = Number.parseInt(event.target.value);
            props.setTrackId(id);
        }, 100);
    };

    return (
        <>
            Choosen track: {props.defaultValue + 1}
            <br />
            {props.min + 1}
            <input
                type={'range'}
                defaultValue={props.defaultValue}
                min={props.min}
                max={props.max}
                onChange={onChange}
            />
            {props.max + 1}
        </>
    );
};
