import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 50px;
    background: linear-gradient(145deg, #f0f0f0, #cacaca);
    box-shadow:  20px 20px 60px #bebebe,
                -20px -20px 60px #ffffff;
`;

const ContainerList = ({ title, tasks }) => {

    return (
        <Container>
            <h3>title</h3>
            {
                tasks.map( task => 
                    <div className='task'>
                        
                    </div>
                )
            }
        </Container>
    );
}
 
export default ContainerList;
