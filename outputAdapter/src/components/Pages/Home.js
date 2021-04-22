import React, { Fragment } from 'react';
import { Header } from '../Common/index';
import { ContainerList } from '../TodoList';

const Home = () => {
    return ( 
        <Fragment>
            <Header/>
            <div className='container' style={{ height: 'calc( 100vh - 52px )', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className='columns' style={{ height: '100%', width: '90%' }}>
                    <div className='column col-4' style={{ margin: 'auto', height: '90%' }}>
                        <ContainerList 
                            title="ToDo"
                            tasks={
                                [
                                    {
                                        title: "Comprar Despensa",
                                        Date: "12/05/2020",
                                        Description: `- Leche\n
                                        - Coca 3L\n
                                        - Carne 3kg`
                                    }
                                ]
                            }
                            icon='icon-menu'
                         />
                    </div>
                    <div className='column col-4' style={{ margin: 'auto', height: '90%' }}>
                        <ContainerList 
                            title="Process"
                            tasks={
                                [
                                    {
                                        title: "Comprar Despensa",
                                        Date: "12/05/2020",
                                        Description: `- Leche\n
                                        - Coca 3L\n
                                        - Carne 3kg`
                                    }
                                ]
                            }
                            icon='icon-time'
                         />
                    </div>
                    <div className='column col-4' style={{ margin: 'auto', height: '90%' }}>
                        <ContainerList 
                            title="Done"
                            tasks={
                                [
                                    {
                                        title: "Comprar Despensa",
                                        Date: "12/05/2020",
                                        Description: `- Leche\n
                                        - Coca 3L\n
                                        - Carne 3kg`
                                    },
                                    {
                                        title: "Comprar Despensa",
                                        Date: "12/05/2020",
                                        Description: `- Leche\n
                                        - Coca 3L\n
                                        - Carne 3kg`
                                    },
                                    {
                                        title: "Comprar Despensa",
                                        Date: "12/05/2020",
                                        Description: `- Leche\n
                                        - Coca 3L\n
                                        - Carne 3kg`
                                    },
                                    {
                                        title: "Comprar Despensa",
                                        Date: "12/05/2020",
                                        Description: `- Leche\n
                                        - Coca 3L\n
                                        - Carne 3kg`
                                    },
                                    {
                                        title: "Comprar Despensa",
                                        Date: "12/05/2020",
                                        Description: `- Leche\n
                                        - Coca 3L\n
                                        - Carne 3kg`
                                    }
                                ]
                            }
                            icon='icon-check'
                         />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Home;
