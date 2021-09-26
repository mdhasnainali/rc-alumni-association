import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Selected from '../Selected/Selected';
import './Persons.css'

const Persons = () => {

    const [persons, setPersons] = useState([]);
    const [select, setSelect] = useState([]);

    useEffect(() => {
        fetch('./database.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    const handleAddToSelect = clickedProduct => {
        const newSelected = [...select, clickedProduct];
        setSelect(newSelected);
    }

    return (
        <div className="row m-0 p-0 mb-4">
            <div className="col-9 row row-cols-1 row-cols-md-3 g-3 ps-4">
                {
                    persons.map(person => <Person buttonControll={handleAddToSelect} person={person} key={person.id}></Person>)
                }
            </div>
            <div className="col-3">
                <Selected select={select}></Selected>
            </div>
        </div>
    );
};

export default Persons;