import { useState } from "react"

export const Statistics = () => {
    const [visible, setVisible] = useState(false);

    const getClassName = () => {
        let result = 'box';

        if (visible === false) {
            result += ' hidden'
        }
        return result;
    }

    return <div className={getClassName()} onClick={() => { setVisible(!visible) }}>
        {visible && (<>
            Statistics
            <div>data 1</div>
            <div>data 2</div>
            <div>data 3</div>
        </>)}
    </div>
}