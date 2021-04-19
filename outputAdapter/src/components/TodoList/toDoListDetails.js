import React, { Fragment } from 'react';
import './styles/toDoListDetails.css';
import avatar from './img/avatar.png';

const toDoDetails = () => {
    return (
        <div className = "modalMain">
            <div className = "modalBody">
                <div className = "header">
                    <h1> Assignment Details</h1>
                    <hr className = "hrModal"></hr>
                    <div className = "avatar"> <img src = {avatar}  ></img> <label>username</label></div>
                </div>
                <div className = "modalContent">
                    <label >Id tarea: 0</label> 
                    <label >Descripción</label> 
                    <textarea></textarea>
                    
                    <label >Vencimiento: 26/04/2021</label> 
                </div> 
            </div>

        </div>
    );
}

export default toDoDetails;