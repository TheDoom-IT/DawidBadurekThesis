export const readFile = (file: File): Promise<string | ArrayBuffer | null> => {
    return new Promise((res, rej) => {
        const reader = new FileReader();

        reader.onload = () => res(reader.result);
        reader.onerror = rej;

        reader.readAsText(file);
    });
};
