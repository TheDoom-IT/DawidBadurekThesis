import { useState } from "react"
import { Tracks } from "../schemas/tracks-schema";

interface Props {
    tracks: Tracks;
}

export const Statistics = (props: Props) => {
    const [visible, setVisible] = useState(true);

    const getClassName = () => {
        let result = 'box';

        if (visible === false) {
            result += ' hidden'
        }
        return result;
    }

    return <div className={getClassName()} onClick={() => { setVisible(!visible) }}>
        {visible && (<>
            <h3 className="text-center">Statistics</h3>
            <br />
            File version: {props.tracks.fileVersion}<br />
            Number of tracks: {props.tracks.trackCount}
        </>)}
    </div>
}