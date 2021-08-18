import React, { FunctionComponent, ReactElement } from 'react';
import Select from 'react-select';
import './dropdown.scss';

export interface DropdownItem {
    value: number | string;
    label: string;
    checked?: boolean;
}

interface DropdownProps {
    onChange: (event: any) => void;
    options: Array<DropdownItem>;
    name: string;
    value?: DropdownItem | Array<DropdownItem> | string | Array<string>;
    label?: string;
    className?: string;
    defaultValue?: any;
    isDisabled?: boolean;
    isClearable?: boolean;
    isSearchable?: boolean;
    isMulti?: boolean;
    error?: string;
    pattern?: any;
    placeholder?: string;
}

const Dropdown: FunctionComponent<DropdownProps> = (props: DropdownProps): ReactElement<void> => {
    return (
        <div className={`dropdown ${props.className ? props.className : ''}`}>
            {props.label && <label className="select-label">{props.label}</label>}
            <Select
                // if isMulti you have to change the event value for onChange to e?.map(oneVal=> oneVal.value)
                isMulti={props.isMulti}
                options={props.options}
                value={props.value}
                className={`custom-dropdown ${props.error ? 'border-error' : ''}`}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                isDisabled={props.isDisabled}
                isClearable={props.isClearable}
                isSearchable={props.isSearchable}
                name={props.name}
                pattern={props.pattern}
                theme={(theme) => ({
                    ...theme,
                    colors: {
                        ...theme.colors,
                        primary: 'var(--secondary-color)',
                    },
                })}
            />
            {props.error && <p className="error-msg">{props.error}</p>}
        </div>
    );
};

export default Dropdown;
