import React, { useState } from 'react';
import { Modal } from '../Common';
import ToDo from './ToDo';

const ContainerList = ({ title, tasks, icon }) => {

    const [show, setShow] = useState(false);

    return (
        <div 
            className="panel" 
            style={{ 
                height: '100%' 
            }}
        >
        <div 
            className="panel-header"
        >   
            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                }} 
                className="panel-title"
            >
                {title}
                <i className={`icon ${icon}`}></i>
            </div>
        </div>
        <div 
            className="panel-body" 
            style={{ 
                scrollbarWidth: 'none' 
            }}
        >
            {
                tasks.lenght === 0 ? <div className="card-subtitle text-gray">No hay tareas...</div> :
                tasks.map( (task, i) => 
                    <ToDo 
                        key={i}
                        title={task.status}
                        Date={task.deadLine.split('T')[0]}
                        Description={task.descripcion}
                        User={task.usuario}
                        Role={title}
                    />
                )
            }
        </div>
        {
            title === 'ToDo' 
            ?
                <div className="panel-footer">
                    <button onClick={() => setShow(true)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} className="btn btn-primary"><i className="icon icon-plus"></i>Add</button>
                </div>
            : null
        }
        <Modal
            title='Add ToDo'
            show={show}
            onHide={setShow}
            task={{}}
        />
      </div>
    );
}
 
export default ContainerList;
