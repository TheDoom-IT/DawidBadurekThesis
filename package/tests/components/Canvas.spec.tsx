import React from 'react';
import { render } from '@testing-library/react';
import { Canvas, MainScene, OrtographicCamera, PerspectiveCamera } from '../../src';

jest.mock('three', () => {
    const THREE = jest.requireActual('three');

    return {
        ...THREE,
        WebGLRenderer: jest.fn().mockReturnValue({
            dispose: jest.fn(),
            forceContextLoss: jest.fn(),
            domElement: document.createElement('canvas'),
        }),
    };
});

function renderInsideCanvas(element: React.ReactElement) {
    return render(element, {
        wrapper: ({ children }) => <Canvas>{children}</Canvas>,
    });
}

describe('Canvas', () => {
    let warnSpy: jest.SpyInstance;

    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation();
        warnSpy = jest.spyOn(console, 'warn').mockImplementation();
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('when Canvas element can find div element', () => {
        it('should add canvas to the div element', () => {
            const renderResult = render(<Canvas></Canvas>);

            const div = renderResult.container.querySelector('div');
            const canvas = renderResult.container.querySelector('canvas');

            expect(div).not.toEqual(null);
            expect(canvas).not.toEqual(null);

            expect(div?.firstChild).toEqual(canvas);
        });
    });

    describe('when unmounting the Canvas', () => {
        it('should remove canvas from the DOM', () => {
            const renderResult = render(
                <div id="id">
                    <Canvas></Canvas>
                </div>,
            );

            const canvasBefore = renderResult.container.querySelector('canvas');
            expect(canvasBefore).not.toEqual(null);

            renderResult.unmount();

            const canvasAfter = renderResult.container.querySelector('canvas');
            expect(canvasAfter).toEqual(null);
        });
    });

    describe('with Scene as a child', () => {
        it('should not throw an exception', () => {
            const test = () =>
                render(
                    <div id="id">
                        <Canvas>{/* <Scene /> */}</Canvas>
                    </div>,
                );

            expect(test).not.toThrow();
        });
    });

    describe('with PerspectiveCamera as a child', () => {
        it('should not throw an exception', async () => {
            const test = () => renderInsideCanvas(<PerspectiveCamera />);

            expect(test).not.toThrow();
        });
    });

    describe('with multiple cameras', () => {
        it('should console.warn', () => {
            renderInsideCanvas(
                <>
                    <PerspectiveCamera />
                    <OrtographicCamera />
                </>,
            );

            expect(warnSpy).toHaveBeenCalledTimes(1);
            expect(warnSpy).toHaveBeenCalledWith(
                'Canvas should contain only single camera object. Only second camera will be used.',
            );
        });
    });

    describe('with multiple main scenes', () => {
        it('should console.warn', () => {
            renderInsideCanvas(
                <>
                    <MainScene />
                    <MainScene />
                </>,
            );

            expect(warnSpy).toHaveBeenCalledTimes(1);
            expect(warnSpy).toHaveBeenCalledWith(
                'Canvas should contain only single scene object. Only second scene will be used.',
            );
        });
    });
});
