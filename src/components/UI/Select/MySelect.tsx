import React from 'react';

const MySelect: React.FC<{
    options:[],
    defaultValue: string,
    value: string,
    onChange: any
}> = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={e => onChange(e.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map((option: any) =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>)}
        </select>
    );
};

export default MySelect;