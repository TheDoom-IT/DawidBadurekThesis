import React from 'react';
import { LineBasicMaterial } from '../../src';
import { checkChildrenEquality } from '../../src/utils/check-children-equality';

function getAsChildren(...elements: JSX.Element[]) {
    const wrapped = <div>{...elements}</div>;
    return React.Children.toArray(wrapped.props.children);
}

describe('checkChildrenEquality', () => {
    describe('with single identical child', () => {
        it('should return true', () => {
            const children1 = getAsChildren(<div />);
            const children2 = getAsChildren(<div />);

            const result = checkChildrenEquality(children1, children2);
            expect(result).toEqual(true);
        });
    });

    describe('with multiple children', () => {
        it('should return true', () => {
            const children1 = getAsChildren(<div />, <span />, <></>);
            const children2 = getAsChildren(<div />, <span />, <></>);

            const result = checkChildrenEquality(children1, children2);
            expect(result).toEqual(true);
        });
    });

    describe('with multiple nested children', () => {
        it('should return true', () => {
            const children1 = getAsChildren(
                <div>
                    <div />
                </div>,
                <>
                    <span />
                    <>
                        <span>
                            <div />
                        </span>
                    </>
                </>,
            );
            const children2 = getAsChildren(
                <div>
                    <div />
                </div>,
                <>
                    <span />
                    <>
                        <span>
                            <div />
                        </span>
                    </>
                </>,
            );

            const result = checkChildrenEquality(children1, children2);
            expect(result).toEqual(true);
        });
    });

    describe('with identical keys', () => {
        it('should return true', () => {
            const children1 = getAsChildren(<div key={'key'}></div>);
            const children2 = getAsChildren(<div key={'key'}></div>);

            const result = checkChildrenEquality(children1, children2);
            expect(result).toEqual(true);
        });
    });

    describe('when children have different keys', () => {
        it('should return false', () => {
            const children1 = getAsChildren(<div key={'key'}></div>);
            const children2 = getAsChildren(<div key={'different key'}></div>);

            const result = checkChildrenEquality(children1, children2);
            expect(result).toEqual(false);
        });
    });

    describe('with nested children with identical keys', () => {
        it('should return true', () => {
            const children1 = getAsChildren(
                <div key={'div1'}>
                    <div key={'div2'}></div>
                    <div key={'some div'}></div>
                </div>,
                <div key={'div3'}></div>,
            );
            const children2 = getAsChildren(
                <div key={'div1'}>
                    <div key={'div2'}></div>
                    <div key={'some div'}></div>
                </div>,
                <div key={'div3'}></div>,
            );

            const result = checkChildrenEquality(children1, children2);
            expect(result).toEqual(true);
        });
    });

    describe('when children has different props', () => {
        it('should return true', () => {
            const children1 = getAsChildren(<LineBasicMaterial params={[]}></LineBasicMaterial>);
            const children2 = getAsChildren(
                <LineBasicMaterial params={[{ color: 0xffffff }]}></LineBasicMaterial>,
            );

            const result = checkChildrenEquality(children1, children2);
            expect(result).toEqual(true);
        });
    });
});
