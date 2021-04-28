import React, { Fragment, useState } from 'react';
import { Modal, TaskModal } from '../Common';
import Particles from 'react-particles-js';

const ToDo = ({ title, Date, Description, User, Role }) => {

    const [show, setShow] = useState(false);

    const bg = () => {
        if ( Role === 'Done' ) return 'bg-success';
        else return 'bg-gray';
    }

    const cursor = () => {
        if ( Role === 'Done' ) return 'pointer';
        else return 'default';
    }

    const checkDone = () => {
        if ( Role === 'Done' ) setShow(true);
    }

    return ( 
        <div>
            <div onClick={() => checkDone()} className={`card ${bg()}`} style={{ border: 'none', margin: '5px 0', cursor: cursor() }}>
                <div className="card-header">
                    <div className="card-title h5">{title}</div>
                    <div className="card-subtitle text-gray">{Date}</div>
                </div>
                <div className="card-body" style={{ padding: '.8rem' }}>
                    {Description}
                </div>
                {
                    Role !== 'Done' 
                    ?
                        <div className="card-footer" style={{ padding: '.8rem' }}>
                            <button onClick={() => setShow(true)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%" }} className="btn"><i className="icon icon-edit"></i>Edit</button>
                        </div>
                    : null
                }
            </div>
            {
                Role !== 'Done' 
                ?
                    <Modal
                        show={show}
                        onHide={setShow}
                        title='Edit'
                        task={{
                            title: title,
                            Date: Date,
                            Description: Description,
                            User: User,
                            Role: Role
                        }}
                    />
                : null
            }
            {
                Role === 'Done' 
                ?
                    <Fragment>
                        <TaskModal
                            show={show}
                            setTaskCheck={setShow}
                            title={title}
                            task={{
                                title: title,
                                Date: Date,
                                Description: Description,
                                User: User,
                                Role: Role
                            }}
                        />
                    </Fragment>
                : null
            }
        </div>
    );
}

export default ToDo;