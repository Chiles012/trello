import React, { useEffect } from 'react';

const TaskModal = ({ title, show, setTaskCheck, task }) => {

    const changeShow = () => {
        if ( show ) return 'active';
        else return '';
    }

    const onCancel = () => {
        console.log(show);
        setTaskCheck(false);
    }

    return ( 
        <div className={`modal ${changeShow()}`} id="modal-id">
            <a onClick={onCancel} className="modal-overlay" id='modal-overlay' aria-label="Close"></a>
            <div className="modal-container bg-success">
                <div className="modal-header">
                    <a onClick={onCancel} className="btn btn-clear float-right" aria-label="Close"></a>
                    <div className="modal-title h5">{title}</div>
                    <div className="card-subtitle text-gray">{task.Date}</div>
                </div>
                <div className="modal-body">
                    <div className="content" style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
                        <p style={{ margin: '0' }}>{task.Description}</p>
                        <i class="icon icon-2x icon-check"></i>
                    </div>
                </div>
                <div className="modal-footer">

                </div>
            </div>
        </div>
    );
}
 
export default TaskModal;