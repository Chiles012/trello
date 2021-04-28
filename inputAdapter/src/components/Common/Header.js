import React from 'react';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    background-color: #6178e9;
    width: 100vw;
    padding: 10px;
    display: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #eaeaea;
    font-weight: bold;

    & > p {
        margin: 0;
    }

    & > figure:hover {
        cursor: pointer;
    }
`

const Header = () => {
    return ( 
        <HeaderDiv>
            <p>Trello-App</p>
            <figure class="avatar avatar-md">
                <i class="avatar-presence online"></i>
            </figure>
        </HeaderDiv>
    );
}
 
export default Header;
