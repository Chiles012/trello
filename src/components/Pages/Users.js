import{React, Fragment}from 'react'
import Header from '../Header'
import Todo from '../TodoList'

export default function Users(){
    return(
        <Fragment>
        <Header />
        <div className='cont'>
            <Todo />
            <Todo />
            <Todo /> 
        </div>
        
    </Fragment>
    )
    
}
