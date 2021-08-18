import React, { FunctionComponent, ReactElement, memo, MouseEvent, ReactNode } from 'react';
import './button.scss';

export interface ButtonProps {
    label?: string;
    onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    disabled?: boolean;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    iconStyle?: string;
    id?: string;
    name?: string;
    title?: string;
    formId?: string;
    type?: 'button' | 'reset' | 'submit';
}

export const Button: FunctionComponent<ButtonProps> = memo(
    (props: ButtonProps): ReactElement<void> => {
        return (
            <button
                className={`button ${props.className ? props.className : ''}`}
                id={props.id}
                name={props.name}
                type={props.type || 'button'}
                disabled={props.disabled}
                title={props.title}
                onClick={props.onClick}
                form={props.formId}
            >
                <div className="button-content">
                    {props.iconLeft && <div className="btn-icon">{props.iconLeft}</div>}
                    <div className="button-label"> {props.label} </div>
                    {props.iconRight && <div className="btn-icon">{props.iconRight}</div>}
                </div>
            </button>
        );
    }
);
