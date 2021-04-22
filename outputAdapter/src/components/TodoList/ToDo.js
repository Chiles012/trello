import React from 'react';

const ToDo = ({ title, Date, Description }) => {
    return ( 
        <div className="card" style={{ border: 'none' }}>
            <div className="card-header">
                <div className="card-title h5">{title}</div>
                <div className="card-subtitle text-gray">{Date}</div>
            </div>
            <div className="card-body">
                {Description}
            </div>
            <div className="card-footer">
                <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: "100%" }} className="btn"><i className="icon icon-edit"></i>Editar</button>
            </div>
        </div>
    );
}

export default ToDo;