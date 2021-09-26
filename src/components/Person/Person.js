import React from 'react';
import './Person.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Person = props => {
    const { name, age, profession, email, donation, image } = props.person;
    const element = <FontAwesomeIcon icon={faCheckCircle} />
    return (
        <div>
            <div className="col h-100">
                <div className="card h-100">
                    <div className="image-container">
                        <img src={image} className="rounded-circle mt-3" alt="" />
                    </div>
                    <div className="card-body text-start">
                        <p className="card-title"><span className="fw-bold">Name: </span>{name}</p>
                        <p className="card-title"><span className="fw-bold">Profession:</span> {profession}</p>
                        <p className="card-title"><span className="fw-bold">Age:</span> {age}</p>
                        <p className="card-title"><span className="fw-bold">Email:</span> {email}</p>
                        <p className="card-title"><span className="fw-bold">Donation:</span> {donation}</p>
                        <div className="text-center btn-container">
                            <button type="button" className="btn w-50 btn-select btn-primary">{element}  Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;