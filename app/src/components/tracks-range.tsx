interface TracksRangeProps {
    min: number;
    max: number;
    defaultValue: number;
    setTrackId: (val: number) => void;
}

export const TracksRange = (props: TracksRangeProps) => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = Number.parseInt(event.target.value);
        props.setTrackId(id);
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
