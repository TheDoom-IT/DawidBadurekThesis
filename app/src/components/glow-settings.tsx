import { useRef } from 'react';
import { ColorResult, GithubPicker, RGBColor } from 'react-color';
import { GLOW_COLORS } from '../constants/glow-colors';

interface GlowSettingsProps {
    glowStrength: number;
    setGlowStrength: (value: number) => void;
    glowColor: RGBColor;
    setGlowColor: (value: RGBColor) => void;
}

export const GlowSettings = ({
    glowStrength,
    setGlowStrength,
    glowColor,
    setGlowColor,
}: GlowSettingsProps) => {
    const timeout = useRef<ReturnType<typeof setTimeout>>();

    // Add debounce
    const onStrengthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        clearTimeout(timeout.current);

        timeout.current = setTimeout(() => {
            const newStrength = Number.parseInt(event.target.value);
            setGlowStrength(newStrength);
        }, 100);
    };

    const onColorChange = (color: ColorResult) => {
        setGlowColor({
            r: color.rgb.r * 2,
            g: color.rgb.g * 2,
            b: color.rgb.b * 2,
            a: color.rgb.a,
        });
    };

    return (
        <>
            Glow strength: {glowStrength}
            <br />
            1
            <input type={'range'} defaultValue={1} min={1} max={20} onChange={onStrengthChange} />
            20
            <br />
            Glow color:
            <GithubPicker
                triangle={'hide'}
                color={glowColor}
                onChangeComplete={onColorChange}
                colors={GLOW_COLORS}
                styles={{
                    default: { card: { background: 'rgb(204, 202, 202)' } },
                }}
            />
        </>
    );
};
