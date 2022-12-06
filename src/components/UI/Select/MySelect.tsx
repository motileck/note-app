import React from 'react';


const MySelect: React.FC<{
    options: {value: string, name: string}[],
    defaultValue: string,
    value?: string | null,
    onChange: Function
}> = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value || ''}
            onChange={e => onChange(e.target.value)}>
            <option value="">{defaultValue}</option>
            {options.map((option: any) =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
};

export default MySelect;