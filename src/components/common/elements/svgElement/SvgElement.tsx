import React, { FunctionComponent, ReactElement, memo } from 'react';
import { ReactComponent as ArrowLeft } from './svgs/arrow-left.svg';

export const enum iconTypesEnum {
    CLOSE_ICON,
    CHECK_ICON,
    ARROW_LEFT,
}

interface SvgElementProps {
    type: iconTypesEnum;
}

export const SvgElement: FunctionComponent<SvgElementProps> = memo(
    ({ type }): ReactElement<void> => {
        const renderIcon = () => {
            switch (type) {
                case iconTypesEnum.CLOSE_ICON:
                    return (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z" />
                        </svg>
                    );
                case iconTypesEnum.CHECK_ICON:
                    return (
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="19" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                    );
                case iconTypesEnum.ARROW_LEFT:
                    // Support SVG as component
                    return <ArrowLeft />;
                default:
                    return <div />;
            }
        };
        return renderIcon();
    }
);
