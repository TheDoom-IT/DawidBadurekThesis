import '../styles/container.css';

interface ContainerProps {
    children?: JSX.Element | JSX.Element[];
}

export const Container = (props: ContainerProps) => {
    return <div className="container">{props.children}</div>;
};
