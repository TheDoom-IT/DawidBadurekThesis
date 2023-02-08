import React from 'react';
import { render, screen } from '@testing-library/react'
import { Canvas, Mesh, OrtographicCamera, PerspectiveCamera, Scene } from '../src';

jest.mock('three', () => {
    const THREE = jest.requireActual('three');

    return {
        ...THREE,
        WebGLRenderer: jest.fn().mockReturnValue({
            dispose: jest.fn(),
            forceContextLoss: jest.fn(),
            domElement: document.createElement('canvas'),
        }),
    }
});

function renderInsideCanvas(element: React.ReactElement) {
    return render(element, { wrapper: ({ children }) => <div id='id'><Canvas divId='id'>{children}</Canvas></div> });
}

describe('Canvas', () => {
    let error: jest.SpyInstance;

    beforeAll(() => {
        error = jest.spyOn(console, 'error').mockImplementation(() => { });
    });

    afterAll(() => {
        error.mockReset();
    });

    describe('when Canvas element is unable to find div element', () => {
        it('should throw an exception', () => {
            const id = "unknown id";
            const test = () => {
                render(<Canvas divId={id}></Canvas>)
            }

            expect(test).toThrow(`Failed to find a div with id "${id}"!`);
        });
    });

    describe('when Canvas element can find div element', () => {
        it('should add canvas to the div element', () => {
            const renderResult = render(<div id='id'><Canvas divId='id'></Canvas></div>)

            const div = renderResult.container.querySelector('#id');
            const canvas = renderResult.container.querySelector('canvas');

            expect(div).not.toEqual(null);
            expect(canvas).not.toEqual(null);

            expect(div?.firstChild).toEqual(canvas);
        });
    });

    describe('when unmounting the Canvas', () => {
        it('should remove canvas from the DOM', () => {
            const renderResult = render(<div id='id'><Canvas divId='id'></Canvas></div>)

            const canvasBefore = renderResult.container.querySelector('canvas');
            expect(canvasBefore).not.toEqual(null);

            renderResult.unmount();

            const canvasAfter = renderResult.container.querySelector('canvas');
            expect(canvasAfter).toEqual(null);
        });
    });

    describe('with Scene as a child', () => {
        it('should not throw an exception', () => {
            const test = () => render(
                <div id='id'>
                    <Canvas divId='id'>
                        {/* <Scene /> */}
                    </Canvas>
                </div>
            );

            expect(test).not.toThrow();
        });
    });

    describe('with PerspectiveCamera as a child', () => {
        it('should not throw an exception', async () => {
            const test = () => renderInsideCanvas(
                <PerspectiveCamera />
            )

            expect(test).not.toThrow();
        });
    });

    describe('with multiple cameras', () => {
        it('should throw an exception', () => {
            const test = () => renderInsideCanvas(
                <>
                    <PerspectiveCamera />
                    <OrtographicCamera />
                </>
            )

            expect(test).toThrow('Canvas should contain only single camera object.');
        });
    });

    describe('with unsupported children', () => {
        it('should throw an exception', () => {
            const test = () => renderInsideCanvas(<Mesh />)

            expect(test).toThrow('Unsupported child type: parent: Canvas, child: Mesh.');
        });
    });
});