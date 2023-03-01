import { SelectedSource } from '../types/selected-source';

interface SelectSourceProps {
    selectedSources: SelectedSource[];
    setSelectedSources: (sources: SelectedSource[]) => void;
}

export const SelectSource = ({ selectedSources, setSelectedSources }: SelectSourceProps) => {
    const onChange = (source: SelectedSource) =>
        setSelectedSources(
            selectedSources.map((oldSource) => {
                if (source.name === oldSource.name) {
                    return {
                        name: source.name,
                        selected: !source.selected,
                    };
                }

                return oldSource;
            }),
        );

    return (
        <>
            {selectedSources.map((source) => (
                <div key={source.name}>
                    <input
                        id={source.name}
                        type="checkbox"
                        name={`source_${source.name}`}
                        checked={source.selected}
                        onChange={() => onChange(source)}
                    />
                    <label htmlFor={`source_${source.name}`}>{source.name}</label>
                </div>
            ))}
        </>
    );
};
