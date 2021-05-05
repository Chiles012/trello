import React, { Fragment, useEffect, useState } from 'react';
import { Header } from '../Common/index';
import { ContainerList } from '../TodoList';
import { Redirect } from 'react-router-dom';
import { authVerify } from '../../helper';
import { getTodo } from '../../actions/todo.action';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

    const [toDoList, setToDoList] = useState([]);
    const [processList, setProcessList] = useState([]);
    const [doneList, setDoneList] = useState([]);

    const dispatch = useDispatch();
    const get = () => dispatch( getTodo() );

    const { todos, error, loading } = useSelector( state => state.todo );

    useEffect(() => {
        get();
    }, [])

    useEffect(() => {
        const to = todos.filter( x => x.status === 'ToDo' );
        const pro = todos.filter( x => x.status === 'Process' );
        const done = todos.filter( x => x.status === 'Done' );

        setToDoList([ ...to ]);
        setProcessList([ ...pro ]);
        setDoneList([ ...done ]);

    }, [todos])

    return ( 
        <Fragment>
            {
                authVerify().login 
                ? 
                    <Fragment>
                        {
                            error ? <Redirect to='/not-found' /> : null
                        }
                        <Header/>
                        <div className='container' style={{ height: 'calc( 100vh - 52px )', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div className='columns' style={{ height: '100%', width: '90%' }}>
                                <div className='column col-4' style={{ margin: 'auto', height: '90%' }}>
                                    {
                                        loading 
                                        ?
                                            <div class="loading"></div>
                                        :
                                        <ContainerList 
                                            title="ToDo"
                                            tasks={toDoList}
                                            icon='icon-menu'
                                        />
                                    }
                                </div>
                                <div className='column col-4' style={{ margin: 'auto', height: '90%' }}>
                                    {
                                        loading 
                                        ?
                                            <div class="loading"></div>
                                        :
                                        <ContainerList 
                                            title="Process"
                                            tasks={processList}
                                            icon='icon-time'
                                        />
                                    }
                                </div>
                                <div className='column col-4' style={{ margin: 'auto', height: '90%' }}>
                                    {
                                        loading 
                                        ?
                                            <div class="loading"></div>
                                        :
                                        <ContainerList 
                                            title="Done"
                                            tasks={doneList}
                                            icon='icon-check'
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </Fragment>
                : <Redirect to='/login'/> 
            }
        </Fragment>
    );
}
 
export default Home;
