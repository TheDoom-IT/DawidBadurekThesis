import { RGBColor } from 'react-color';

export const GLOW_COLORS: string[] = [
    '#B80000',
    '#DB3E00',
    '#FCCB00',
    '#008B02',
    '#006B76',
    '#12FFDE',
    '#004DCF',
    '#5300EB',
];

export const colorStringToRGB = (color: (typeof GLOW_COLORS)[number]): RGBColor => {
    return {
        r: Number.parseInt(color.substring(1, 3), 16),
        g: Number.parseInt(color.substring(3, 5), 16),
        b: Number.parseInt(color.substring(5, 7), 16),
    };
};
