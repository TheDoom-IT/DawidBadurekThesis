import { SelectedSource } from '../types/selected-source';

interface SelectSourceProps {
    selectedSources: SelectedSource[];
    setSelectedSources: (sources: SelectedSource[]) => void;
}

export const SelectSource = ({ selectedSources, setSelectedSources }: SelectSourceProps) => {
    const onChange = (sourceIndex: number) =>
        setSelectedSources(
            selectedSources.map((source, index) => {
                if (index === sourceIndex) {
                    return {
                        ...source,
                        selected: !source.selected,
                    };
                }

                return source;
            }),
        );

    return (
        <>
            {selectedSources.map((source, index) => (
                <div className={'source-checkbox-wrapper'} key={source.name}>
                    <span>
                        <input
                            id={source.name}
                            type="checkbox"
                            name={`source_${source.name}`}
                            checked={source.selected}
                            onChange={() => onChange(index)}
                        />
                        <label htmlFor={`source_${source.name}`}>{source.name}</label>
                    </span>
                    <span>{source.count} tracks</span>
                </div>
            ))}
        </>
    );
};
