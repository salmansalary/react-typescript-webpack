import React, { FunctionComponent, ReactElement, memo } from 'react';
import './loader.scss';

export interface LoaderProps {
    toggle: boolean;
    fullscreen?: boolean;
    className?: string;
    children?: ReactElement;
}

export const Loader: FunctionComponent<LoaderProps> = memo(
    (props: LoaderProps): ReactElement<void> => {
        if (props.toggle) {
            return (
                <div className={`loader-wrapper ${props.fullscreen ? 'fullscreen' : ''} ${props.className || ''}`}>
                    <div className="loader-holder">
                        <div className="loader" />
                    </div>
                </div>
            );
        }
        return props.children ?? null;
    }
);
