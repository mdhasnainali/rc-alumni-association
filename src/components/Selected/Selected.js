import React from 'react';
import './Selected.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const select = props => {
    const { select } = props;
    const element = <FontAwesomeIcon icon={faPaperPlane} />
    let total = 0;
    let donation = 0;

    console.log(select);
    for (const person of select) {
        total++;
        donation += person.donation;

    }

    return (
        <div className="mt-4">
            <h3 className="text-primary">Selected Persons</h3>
            <div >
                <h5>Total Selected: {total} </h5>
                <h5>Total Donation: ${donation}</h5>
            </div>
            <div className="selected-name text-center">
                {
                    select.map(person => <h6>{person.name}</h6>)
                }
            </div>
            <button type="button" className="btn w-50 btn-select btn-primary">{element}  Send Invitation</button>
        </div>
    );
};

export default select;