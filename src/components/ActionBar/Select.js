import React, { useState } from 'react';
import Select from 'react-select';

import { options } from './constants';

export default function BudboSelect({ openUp }) {
    const [selectedOption, setSelectedOption] = useState(options[0]);

    return (
        <Select
            menuPlacement={openUp ? 'top' : 'auto'}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            className="mb-2"
        />
    );
}