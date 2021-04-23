import React, { useState } from 'react';

const Modal = ({ title, show, onHide, task }) => {

    const setShow = () => {
        if ( show ) return 'active';
        else return '';
    }

    const setMonth = () => {
        const month = new Date().getMonth() + 1;
        if ( month.toString().length < 2 ) return '0' + month;
        return month;
    }

    const [done, setDone] = useState({
        title: task.title || '',
        Date: task.Date || new Date().getFullYear() + '-' + setMonth() + '-' + new Date().getDate(),
        Description: task.Description || '',
        User: task.User || '',
        Role: task.Role || ''
    })

    const onCancel = () => {
        setDone({
            title: task.title || '',
            Date: task.Date || new Date().getFullYear() + '-' + setMonth() + '-' + new Date().getDate(),
            Description: task.Description || '',
            User: task.User || '',
            Role: task.Role || ''
        });
        onHide(false);
    }

    return ( 
        <div class={`modal ${setShow()}`} id="modal-id">
            <a href="#close" class="modal-overlay" aria-label="Close"></a>
            <div class="modal-container">
            <div class="modal-header">
                <a onClick={() => onHide(false)} class="btn btn-clear float-right" aria-label="Close"></a>
                <div class="modal-title h5">{title}</div>
            </div>
            <div class="modal-body">
                <div class="content">
                    <div>
                        <div class="input-group" style={{ alignItems: 'center', margin: '5px 0' }}>
                            <div className='col-3'>Title:</div>
                            <input onChange={e => setDone({ ...done, title: e.target.value })} value={done.title} type="text" class="form-input col-9" placeholder='title' />
                        </div>
                        <div class="input-group" style={{ alignItems: 'center', margin: '5px 0' }}>
                            <div className='col-3'>Date:</div>
                            <input onChange={e => setDone({ ...done, Date: e.target.value })} type="date" class="form-input col-9" value={done.Date} />
                        </div>
                        <div class="input-group" style={{ alignItems: 'center', margin: '5px 0' }}>
                            <div className='col-3'>User:</div>
                            <select onChange={e => setDone({ ...done, User: e.target.value })} value={done.User} class="form-select col-9">
                                <option value=''>Choose an option</option>
                                <option value='1'>Vallejo</option>
                                <option value='2'>Skype</option>
                                <option value='3'>Hipchat</option>
                            </select>
                        </div>
                        <div class="input-group" style={{ alignItems: 'center', margin: '5px 0' }}>
                            <div className='col-3'>Description:</div>
                            <textarea 
                                value={done.Description}
                                onChange={e => setDone({ ...done, Description: e.target.value })}
                                className='form-input col-9'
                                rows={3}
                                placeholder='Description ...'
                            />
                        </div>
                    </div>
                </div>
                {
                    title !== 'Add ToDo' 
                    ?
                        <button className='btn btn-success' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '20px' }}><i className='icon icon-forward'></i>{ done.Role === 'ToDo' ? "To Process" : "To Done" }</button>
                    : null
                }
            </div>
            <div class="modal-footer">
                <div>
                    <button style={{ margin: '0 5px' }} className='btn btn-error' onClick={() => onCancel()}>Cancel</button>
                    <button style={{ margin: '0 5px' }} className='btn btn-success'>{ title === "Add ToDo" ? "Add" : "Edit" }</button>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Modal;