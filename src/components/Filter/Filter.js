import React, { useState } from 'react';
import Dropdown from '../DropDown/Dropdown.js';

import './filter.css';

export default function Filter(props) {
    const gender = {
        name: 'gender',
        options: [
            'Male',
            'Female',
            'Unknown'
        ],
    }

    const species = {
        name: 'species',
        options: [
            'Human',
            'Alien',
            'Unknown'
        ]
    }

    const aliveness = {
        name: 'aliveness',
        options: [
            'Alive',
            'Dead',
            'Unknown'
        ]
    }

    return (
        <div className="Filter">
            <form className="form-filter" action="">
                <input type="text" onChange={e => props.setFilter({ ...props.filter, search: e.target.value })}
                    placeholder="Character Name" value={props.filter.search}
                    data-type={props.type} />

                <Dropdown filter={props.filter} setFilter={props.setFilter}
                    optionData={gender} />
                <Dropdown filter={props.filter} setFilter={props.setFilter}
                    optionData={species} />
                <Dropdown filter={props.filter} setFilter={props.setFilter}
                    optionData={aliveness} />

            </form>
        </div>
    )
}