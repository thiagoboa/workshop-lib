import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`

    background: blue;
    border-radius: 3px;
    color: white;
    font-size: 20px;
`;

export default function Button(props){
    return (
        <StyledButton>{props.children}</StyledButton>
    );
}
