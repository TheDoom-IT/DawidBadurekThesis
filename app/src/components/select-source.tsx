import { SelectedSourceObject } from '../types/selected-source';

interface SelectSourceProps {
    selectedSources: SelectedSourceObject;
    setSelectedSources: (sources: SelectedSourceObject) => void;
}

export const SelectSource = ({ selectedSources, setSelectedSources }: SelectSourceProps) => {
    const onChange = (sourceIndex: string) => {
        const result: SelectedSourceObject = {};

        Object.entries(selectedSources).forEach(([key, source]) => {
            if (key === sourceIndex) {
                result[key] = {
                    ...source,
                    selected: !source.selected,
                };
                return;
            }

            result[key] = {
                ...source,
            };
        });

        setSelectedSources(result);
    };

    return (
        <div>
            Sources:
            {Object.entries(selectedSources).map(([key, source]) => (
                <div className={'source-checkbox-wrapper'} key={source.name}>
                    <span>
                        <input
                            id={source.name}
                            type="checkbox"
                            name={`source_${source.name}`}
                            checked={source.selected}
                            onChange={() => onChange(key)}
                        />
                        <label htmlFor={`source_${source.name}`}>{source.name}</label>
                    </span>
                    <span>{source.count} tracks</span>
                </div>
            ))}
        </div>
    );
};
