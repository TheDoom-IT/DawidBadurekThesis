import React from 'react';
import './container.css'

interface ContainerProps {
    children?: JSX.Element | JSX.Element[];
}

const Container = (props: ContainerProps) => {
    return <div className='container'>
        {props.children}
    </div>
}

export default Container;