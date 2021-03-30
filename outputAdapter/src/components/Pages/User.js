import{React, Fragment}from 'react'
import Header from '../Header'
import Todo from '../TodoList'

const User = () => {
    return (
        <Fragment>
            <Header />
            <div className='cont'>
                <Todo />
                <Todo />
                <Todo /> 
            </div>
        </Fragment>
    );
}
 
export default User;