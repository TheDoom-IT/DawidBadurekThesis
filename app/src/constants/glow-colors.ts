import { RGBColor } from 'react-color';

export const GLOW_COLORS: string[] = ['#FF4040', '#AB4EF0', '#FCCB00', '#11FB11'];

export const colorStringToRGB = (color: (typeof GLOW_COLORS)[number]): RGBColor => {
    return {
        r: Number.parseInt(color.substring(1, 3), 16),
        g: Number.parseInt(color.substring(3, 5), 16),
        b: Number.parseInt(color.substring(5, 7), 16),
        a: 1.0,
    };
};

export const pushLuminance = (color: RGBColor): RGBColor => {
    return {
        r: color.r * 3,
        g: color.g * 3,
        b: color.b * 3,
        a: color.a,
    };
};
