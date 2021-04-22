import React from 'react';
import ToDo from './ToDo';

const ContainerList = ({ title, tasks, icon }) => {

    return (
        <div className="panel" style={{ height: '100%' }}>
        <div className="panel-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="panel-title">{title}<i className={`icon ${icon}`}></i></div>
        </div>
        <div className="panel-body" style={{ scrollbarWidth: 'none' }}>
            {
                tasks.lenght === 0 ? <div className="card-subtitle text-gray">No hay tareas...</div> :
                tasks.map( task => 
                    <ToDo 
                        key={task.Date}
                        title={task.title}
                        Date={task.Date}
                        Description={task.Description}
                    />
                )
            }
        </div>
        <div className="panel-footer">
            <button style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} className="btn btn-primary"><i className="icon icon-plus"></i>Agregar</button>
        </div>
      </div>
    );
}
 
export default ContainerList;
