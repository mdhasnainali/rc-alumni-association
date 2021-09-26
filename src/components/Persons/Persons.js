import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import Selected from '../Selected/Selected';

const Persons = () => {

    const [persons, setPersons] = useState([]);
    useEffect(() => {
        fetch('./database.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    }, [])

    console.log(persons);

    return (
        <div className="row m-0 p-0">
            <div className="col-9 row row-cols-1 row-cols-md-3 g-3 ps-4">
                {
                    persons.map(person => <Person person={person} key={person.id}></Person>)
                }
            </div>
            <div className="col-3">
                <Selected></Selected>
            </div>
        </div>
    );
};

export default Persons;