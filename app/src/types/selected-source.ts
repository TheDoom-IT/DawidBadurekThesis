export interface SelectedSource {
    name: string;
    selected: boolean;
    count: number;
}

export interface SelectedSourceObject {
    [key: string]: SelectedSource;
}
